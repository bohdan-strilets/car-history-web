import { Outlet } from 'react-router-dom';

import { content, wrapper } from './onboarding-layout.css';

export const OnboardingLayout = () => {
  return (
    <div className={wrapper}>
      <div className={content}>
        <Outlet />
      </div>
    </div>
  );
};
