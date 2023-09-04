import {atom} from 'recoil';
import {recoilPersist} from 'recoil-persist';
const {persistAtom} = recoilPersist();

export const eachArticeState = atom({
	key: 'src/atoms/auth.jsx-eachArticeState',
	default: {},
	effects_UNSTABLE: [persistAtom],
});
