# Technical Debt

## Mikado plan

- [ ] Fix lint errors
  - [ ] `@typescript-eslint/prefer-for-of`
  - [ ] `@typescript-eslint/no-inferrable-types`
- [ ] Make code more readable
  - [ ] Remove comment in `RoverState` class
  - [ ] Use meaningful names
    - [ ] Class `Rover`
      - [ ] `rs`: `state`
      - [ ] `pos()`: `toString()`
        - [ ] inline method `XYD()`
      - [ ] In constructor:
        - [ ] `p` -> `initialState`
        - [ ] `s` -> `stateParameters`
      - [ ] Methods `go()` and `G()`
        - [ ] `go.cms`: `go.commands`
        - [ ] `go()` -> `_go()`
        - [ ] `G.z`: `G.commands`
        - [ ] Inline method `_go`
        - [ ] `G()` -> `go()`
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
