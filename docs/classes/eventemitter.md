[markup-utils](../README.md) / [Exports](../modules.md) / EventEmitter

# Class: EventEmitter

## Table of contents

### Constructors

- [constructor](eventemitter.md#constructor)

### Properties

- [events](eventemitter.md#events)

### Methods

- [emit](eventemitter.md#emit)
- [on](eventemitter.md#on)

## Constructors

### constructor

\+ **new EventEmitter**(): [*EventEmitter*](eventemitter.md)

Used to create and track events

**Returns:** [*EventEmitter*](eventemitter.md)

Defined in: [EventEmitter.ts:9](https://github.com/Hyubert/markup-utils/blob/91e2272/src/EventEmitter.ts#L9)

## Properties

### events

• **events**: EventList

Defined in: [EventEmitter.ts:9](https://github.com/Hyubert/markup-utils/blob/91e2272/src/EventEmitter.ts#L9)

## Methods

### emit

▸ **emit**(`eventName`: *string*, `data?`: { [key: string]: *string* \| *number*;  } \| *string*[] \| *number*[]): *void*

Call an event by key and triggers a callback

#### Parameters:

| Name | Type |
| :------ | :------ |
| `eventName` | *string* |
| `data?` | { [key: string]: *string* \| *number*;  } \| *string*[] \| *number*[] |

**Returns:** *void*

Defined in: [EventEmitter.ts:33](https://github.com/Hyubert/markup-utils/blob/91e2272/src/EventEmitter.ts#L33)

___

### on

▸ **on**(`eventName`: *string*, `callback`: Function): Function

Creates an event by key, and saves the callback

#### Parameters:

| Name | Type |
| :------ | :------ |
| `eventName` | *string* |
| `callback` | Function |

**Returns:** Function

Defined in: [EventEmitter.ts:23](https://github.com/Hyubert/markup-utils/blob/91e2272/src/EventEmitter.ts#L23)
