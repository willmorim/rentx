import { useTheme } from "styled-components";
import { Container, Title } from "./styles";

interface Props {
  title: string;
  color?: string;
  onPress: () => void;
  enabled?: boolean;
}

export function Button({ title, color, onPress, enabled = true }: Props) {
  const theme = useTheme();

  return (
    <Container 
      onPress={onPress} 
      color={color ? color : theme.colors.main} 
      enabled={enabled} 
      style={{ opacity: enabled ? 1 : .5 }}
    >
      <Title>{title}</Title>
    </Container>
  );
}
