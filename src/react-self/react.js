import { ReactCurrentOwner, RESERVED_PROPS } from "./ReactCurrentOwner";
import { REACT_ELEMENT_TYPE } from "./ReactSymbols";
import { Component } from "./ReactComponent";

function hasValidRef(config) {
  return config.ref !== undefined;
}
function hasValidKey(config) {
  return config.key !== undefined;
}

function ReactElement(type, /* key, ref, _self, _source,  */ _owner, props) {
  const element = { $$typeof: REACT_ELEMENT_TYPE, type, _owner, props };
  return element;
}

export function createElement(type, config, children) {
  let propName;
  let self = null;
  let source = null;
  const props = {};

  if (config !== null) {
    if (hasValidRef(config)) {
      ref = config.ref;
    }

    if (hasValidKey(config)) {
      key = config.key;
    }

    self = config.__self === undefined ? null : config.__self;
    source = config.__source === undefined ? null : config.__source;
    for (propName in config) {
      if (!RESERVED_PROPS.hasOwnProperty(propName)) {
        props[propName] = config[propName];
      }
    }
  }

  const childrenLength = arguments.length - 2;
  if (childrenLength === 1) {
    /* 1. 只有一个children，直接渲染 */
    props.children = children;
  } else if (childrenLength > 1) {
    /* 2.由多个元素，赋值给props.children,继续渲染 */
    const childArray = Array(childrenLength);
    for (let i = 0; i < childrenLength; i++) {
      childArray[i] = arguments[i + 2];
    }
    props.children = childArray;
  }

  if (type && type.defaultProps) {
    const defaultProps = type.defaultProps;
    //只有当属性对象没有此属性对应的值的时候，默认属性才会生效，否则直接忽略
    for (propName in defaultProps) {
      if (props[propName] === undefined) {
        props[propName] = defaultProps[propName];
      }
    }
  }

  return ReactElement(
    type,
    // key,
    // ref,
    // self,
    // source,
    ReactCurrentOwner.current,
    props
  );
}

const React = { createElement, Component };

export default React;
