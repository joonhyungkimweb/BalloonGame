export class InvalidGridSizeError extends Error {
  name = "InvalidGridSizeError";
  constructor(public size: GridSize) {
    super("Invalid grid size");
  }
}
