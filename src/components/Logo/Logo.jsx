import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { LocalStorage } from '@/api/utilities';
import { SvgIcon } from '../SVGIcon';

export function Logo({ spin = false }) {
	const to = LocalStorage.hasSession() ? '/client/requests' : '/auth/sign-in';

	const spinClass = spin ? 'animate-spin-slow' : '';

	return (
		<Link to={to} className="flex mb-6 text-2xl font-semibold text-black place-items-center">
			<SvgIcon name="react" className={`w-14 h-14 mr-1 ${spinClass} `} />
			<span className="h-8 text-4xl">Insta</span><span className='h-8 text-[#FB9300] text-4xl'>Ya!</span>
		</Link>
	);
}

Logo.propTypes = {
	spin: PropTypes.bool,
};
