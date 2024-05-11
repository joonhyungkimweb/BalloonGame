import useThemeAtom from "../../atoms/useThemeAtom";
import Button from "../base/Button";

export default function ThemeToggleButton() {
  const { theme, toggleTheme } = useThemeAtom();

  return (
    <Button size="small" variant="primary" onClick={toggleTheme}>
      {theme === "light" ? "다크" : "라이트"} 모드 보기
    </Button>
  );
}
