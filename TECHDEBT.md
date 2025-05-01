# Technical Debt

## Mikado plan

- [x] Fix lint errors
  - [x] `@typescript-eslint/prefer-for-of`
  - [x] `@typescript-eslint/no-inferrable-types`
- [ ] Make code more readable
  - [x] Remove comment in `RoverState` class
  - [-] Add eslint rule to disallow unused variables/functions
    - **NOTE** Not possible; only private methods are checked for usage
  - [x] Remove unused method `G()`
  - [x] Use meaningful names
    - [x] Class `Rover`
      - [x] `rs`: `state`
      - [x] `pos()`: `reportPosition()`
        - [x] inline method `XYD()`
        - [x] remove `XYD()` method
      - [x] In constructor:
        - [x] `p` -> `initialState`
        - [x] `s` -> `stateParameters`
      - [x] Method `go()`
        - [x] `cms`: `commands`
        - [x] `c`: `command`
    - [x] Class `RoverState`
      - [x] `xx` -> `x`
      - [x] `yy` -> `y`
      - [x] `dd` -> `direction`
  - [ ] Fix code Smells
    - [ ] Fix SonarQube issues
      - [ ] `rs` is never reassigned; mar as `readonly`
      - [ ] Remove duplicated code
        - [ ] Extract method `turnLeft()`
        - [ ] Extract method `turnRight()`
        - [ ] Introduce Union Type `Direction`
        - [ ] Change `Roverstate.direction` to be of type `Direction`
        - [ ] Replace `if`/`else` with lookup table
