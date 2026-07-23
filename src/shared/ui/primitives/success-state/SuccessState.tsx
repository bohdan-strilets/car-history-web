import { IconBox } from '../icon-box';

import { pulse, root } from './success-state.css';

export const SuccessState = () => {
  return (
    <div className={root}>
      <IconBox name="check" size="2xl" solid="success" className={pulse} weight="bold" />
    </div>
  );
};
