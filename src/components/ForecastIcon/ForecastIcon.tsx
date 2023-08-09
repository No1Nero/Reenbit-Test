import {BsCloudSnow, BsCloudRain, BsCloudFog, BsCloudy} from 'react-icons/bs';
import {WiCloudyWindy, WiDayCloudy, WiDaySunny} from 'react-icons/wi';
import {IoCloudyNightOutline} from 'react-icons/io5';
import {MdOutlineNightlightRound} from 'react-icons/md';
import {GrStatusUnknown} from 'react-icons/gr';

interface ForecastIconProps {
    icon: string,
    size?: number,
};

export default function ForecastIcon({icon, size}: ForecastIconProps) {
    return (
        <>
        {icon === 'snow' ? <BsCloudSnow size={size ? size : 70} />
        : icon === 'rain' ? <BsCloudRain size={size ? size : 70} />
        : icon === 'fog' ? <BsCloudFog size={size ? size : 70} />
        : icon === 'wind' ? <WiCloudyWindy size={size ? size : 70} />
        : icon === 'cloudy' ? <BsCloudy size={size ? size : 70} />
        : icon === 'partly-cloudy-day' ? <WiDayCloudy size={size ? size : 70} />
        : icon === 'partly-cloudy-night' ? <IoCloudyNightOutline size={size ? size : 70} />
        : icon === 'clear-day'? <WiDaySunny size={size ? size : 70} />
        : icon === 'clear-night' ? <MdOutlineNightlightRound size={size ? size : 70} />
        : <GrStatusUnknown size={70} />
        }
        </>
    );
};