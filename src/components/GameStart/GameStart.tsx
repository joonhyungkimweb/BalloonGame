import useGridSizeAtom from "../../atoms/useGridSizeAtom";
import { extractInputValueFromForm } from "../../shared/utils/formUtils";
import { parseNumericToNumber } from "../../shared/utils/stringUtils";
import InputForm, { type InputConfig } from "../base/InputForm";
import Modal from "../base/Modal";

type GameStartModalProps = {
  onResize: (gridSize: GridSize) => void;
};

const createGridInputConfigs = ({ columns, rows }: GridSize): InputConfig[] => [
  {
    type: "number",
    name: "columns",
    title: "가로",
    defaultValue: columns,
  },
  {
    type: "number",
    name: "rows",
    title: "세로",
    defaultValue: rows,
  },
];

export default function GameStartModal({ onResize }: GameStartModalProps) {
  const { gridSize, resize } = useGridSizeAtom();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { columns, rows } = extractInputValueFromForm(
      e.currentTarget,
      "columns",
      "rows"
    );

    const newGridSize = {
      columns: parseNumericToNumber(columns),
      rows: parseNumericToNumber(rows),
    };

    resize(newGridSize);
    onResize(newGridSize);
  };

  return (
    <Modal size="small">
      <InputForm
        inputConfigs={createGridInputConfigs(gridSize)}
        onSubmit={handleSubmit}
        buttonText="시작"
      />
    </Modal>
  );
}
