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

export class InvalidSaveDataError extends ErrorWithPresentational {
  name = "InvalidSaveDataError";
  constructor() {
    super("Invalid save data", "저장된 데이터가 올바르지 않습니다.");
  }
}

export class NoSavedDataError extends ErrorWithPresentational {
  name = "NoSavedDataError";
  constructor() {
    super("No saved data", "저장된 데이터가 없습니다.");
  }
}
