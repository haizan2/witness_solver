# GUI

## Graphics

The main grphical representation of the puzzles consists of a single svg element containing
definitions for the constraint symbols and six layers for structuring the rendering.

### Layers
 - visual-bg: background visuals
 - grid: puzzle grid; contains nodes, edges, start and end points
 - constraints: visual cell constraints
 - selectors: ui elements for selecting nodes, edges, cells in edit mode, starting points in play mode
 - solution: visual representation of the solution path

## Menu

### Puzzle Settings
 - Grid Size 1-9 x 1-9 with 1x1 forbidden
 - Checkboxes for horizontal/vertical symmetry, differently colored lines, cylinder/torus topologies
 - Have apply button with tooltip warning against reset

### Constraints
 - Where applicable constraints change color according to the color menu
 - Buttons for Squares, Stars, Tetris, Errors, Triangles, Hexagons
 - When Tetris is selected have a panel pop up where pieces can be constructed and rotated/hollow toggled

### Colors
 - Black, White, Red, Gree, Blue, Cyan, Magenta, Yellow
 - automatically applied to newly placed constraints
 - buttons to apply current color to: grid, light tint, solution line, puzzle background, border background

### Skin
 - Monitor, Treehouse, Triangle Tutorial...


# Implementation

## Global variables
 - puzzle: holds puzzle definitions: dimensions, node/edge/cell types, color scheme
 - graph: graph (instead of grid) representation of the puzzle
 - metrics: holds ui metrics: line width, node spacing, horizontal/vertical padding
 - current_color: color that was last selected in the color menu
 - current_constraint: currently active constraint or node/edge button.
 - current_solution: holds representation of solution by player or solver: nodes in the solution, edge the soluion is on...
