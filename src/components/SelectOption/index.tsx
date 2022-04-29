import * as C from './styles';

export interface IProps{ 
  title: string
  description: string
  icon: string
  selected: boolean
  onClick: () => void
}

export const SelectOption = ({title, description, icon, selected, onClick} : IProps) => {
  return(
    <C.Container onClick = {onClick} selected = {selected} >
      <C.Icon> {icon} </C.Icon>
      <C.Info>
        <C.Title> {title} </C.Title>
        <C.Description> {description} </C.Description>
      </C.Info>
    </C.Container>
  )
};
