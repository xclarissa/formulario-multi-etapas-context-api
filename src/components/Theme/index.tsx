import Header from '../Header';
import { SidebarItem } from '../SidebarItem';
import * as C from './styles';

interface IChildren {
  children: React.ReactNode;
}

const Theme = ({ children }: IChildren) => {
  return (
    <C.Container>
      <C.Area>
        <Header />
        <C.Steps>
          <C.Sidebar>
            <SidebarItem
              title = 'Pessoal'
              description = 'Se identifique'
              icon = 'profile'
              path = '/'
            />

            <SidebarItem
              title = 'Profissional'
              description = 'Seu nível'
              icon = 'book'
              path = '/step2'
            />

            <SidebarItem
              title = 'Contatos'
              description = 'Como te achar'
              icon = 'mail'
              path = '/step3'
            />

          </C.Sidebar>
          <C.Page>
            {children}
          </C.Page>
        </C.Steps>
      </C.Area>
    </C.Container>
  );
};

export default Theme;
