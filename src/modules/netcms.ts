import { ViteSetupModule } from '@/types/ViteSetupModule';
import CMS from 'netlify-cms-app';

export const install: ViteSetupModule = ({ isClient, initialState, app }) => {
	const cms = CMS.init();
	app.use(cms);
	
};
