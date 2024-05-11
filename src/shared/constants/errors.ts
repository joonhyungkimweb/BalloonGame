export class ErrorWithPresentational extends Error {
  constructor(public message: string, public presentational: string) {
    super(message);
  }
}

export class InvalidGridSizeError extends ErrorWithPresentational {
  name = "InvalidGridSizeError";
  constructor(public size: GridSize) {
    super(
      "Invalid grid size",
      "그리드 크기가 올바르지 않습니다. 3~10 사이의 숫자를 입력해주세요."
    );
  }
}
