# Technical Debt

## Mikado plan

- [ ] Fix lint errors
  - [ ] `@typescript-eslint/prefer-for-of`
  - [ ] `@typescript-eslint/no-inferrable-types`
- [ ] Make code more readable
  - [ ] Remove comment in `RoverState` class
  - [ ] Remove unused method `G()`
  - [ ] Use meaningful names
    - [ ] Class `Rover`
      - [ ] `rs`: `state`
      - [ ] `pos()`: `toString()`
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
        - [ ] extract method `rotateClockwise()`
        - [ ] extract method `rotateCounterClockwise()`
        - [ ] replace `if`/`else` with lookup table
