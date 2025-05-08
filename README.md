# What are some differences between interfaces and types in TypeScript?

## Although interfaces and types both are used for defining the shape of the objects. However, both has some distinguished differences.

    - Firstly Both are used to define objects but interface can not be used to define primitives values.
    - unlike type, interface allows extends where type use intersection type (&).
    - where type supports union and intersection but interface do not support natively.
    - interface can be extended later means declaration merging possible in interface where type can not be opened after the defination.
    - For mapped type type is more convenient than interface.
    - interface is a little bit faster in some cases where type has not noticeable difference in runtime.
