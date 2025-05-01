# Technical Debt

## Mikado plan

- [x] Fix lint errors
  - [x] `@typescript-eslint/prefer-for-of`
  - [x] `@typescript-eslint/no-inferrable-types`
- [ ] Make code more readable
  - [ ] Remove comment in `RoverState` class
  - [ ] Add eslint rule to disallow unused variables/functions
  - [ ] Remove unused method `G()`
  - [ ] Use meaningful names
    - [ ] Class `Rover`
      - [ ] `rs`: `state`
      - [ ] `pos()`: `reportPosition()`
        - [ ] inline method `XYD()`
        - [ ] remove `XYD()` method
      - [ ] In constructor:
        - [ ] `p` -> `initialState`
        - [ ] `s` -> `stateParameters`
      - [ ] Method `go()`
        - [ ] `cms`: `commands`
        - [ ] `c`: `command`
    - [ ] Class `RoverState`
      - [ ] `xx` -> `x`
      - [ ] `yy` -> `y`
      - [ ] `dd` -> `direction`
  - [ ] Fix code Smells
    - [ ] Fix SonarQube issues
      - [ ] `rs` is never reassigned; mar as `readonly`
      - [ ] Remove duplicated code
        - [ ] Extract method `turnLeft()`
        - [ ] Extract method `turnRight()`
        - [ ] Introduce Union Type `Direction`
        - [ ] Change `Roverstate.direction` to be of type `Direction`
        - [ ] Replace `if`/`else` with lookup table
