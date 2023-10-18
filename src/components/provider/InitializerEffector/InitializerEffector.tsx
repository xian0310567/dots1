import {useSetRecoilState} from 'recoil';
import device from 'react-native-device-info';

import useTodo from '@/hooks/feature/todo/useTodo';

import {userState} from '@/store/user';

import {InitializerEffectorProps} from './lib/InitializerEffector';

const InitializerEffector = (props: InitializerEffectorProps) => {
  const setUser = useSetRecoilState(userState);
  device.getUniqueId().then(res => {
    setUser(res);
  });

  const {getTodo} = useTodo();

  getTodo();

  return <>{props.children}</>;
};

export default InitializerEffector;