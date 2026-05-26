import { ModalProvider } from '@app/providers';
import { Outlet } from 'react-router-dom';

import { contentWrapper, main, root } from './app-layout.css';
import { useSidebar } from './model';
import { BottomBar, Header, Sidebar } from './ui';

export const AppLayout = () => {
  const { expanded, toggle } = useSidebar();

  return (
    <ModalProvider>
      <div className={root}>
        <Sidebar expanded={expanded} onToggle={toggle} />

        <div className={contentWrapper}>
          <Header />

          <main className={main}>
            <Outlet />
          </main>

          <BottomBar />
        </div>
      </div>
    </ModalProvider>
  );
};
