# What are some differences between interfaces and types in TypeScript?

## Although interfaces and types both are used for defining the shape of the objects. However, both has some distinguished differences.

    - Firstly Both are used to define objects but interface can not be used to define primitives values.
    - unlike type, interface allows extends where type use intersection type (&).
    - where type supports union and intersection but interface do not support natively.
    - interface can be extended later means declaration merging possible in interface where type can not be opened after the defination.
    - For mapped type type is more convenient than interface.
    - interface is a little bit faster in some cases where type has not noticeable difference in runtime.

# What is the use of enums in TypeScript? Example of a numeric and string enum.

    - Some use of enums:
    _ Preseved the values to a predefined set.
    _ A central place for all constants for more readability and easy maintance.
    _ To get auto increment behavior.
    _ Self documenting code .

## Example of numeric enum

    enum RoomNumber{
        RedTeam: 1,
        GreenTeam: 3,
        WhiteTeam: 2
    }

## Example of string enum

    enum Medicine{
        Morning: "Napa",
        Noon: "Ceclo",
        Night: "Zink"
    }
