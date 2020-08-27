import React from 'react';
import PropTypes from 'prop-types';

import {
	headerStyle,
	containerStyle,
	subtitleStyle,
	titleStyle,
	videoStyle
} from './styles';


const defaultProps = {
	bgColor: '#ccc',
	textColor: '#fff',
	font: 'sans-serif',
	bgImage: ''
}

const propTypes = {
	title: PropTypes.string,
	subtitle: PropTypes.string,
	bgColor: PropTypes.string,
	textColor: PropTypes.string,
	font: PropTypes.string,
	bgImage: PropTypes.string,
	video: PropTypes.string
}

const FullHeader = ({ title, subtitle, bgColor, textColor, font, bgImage, video }) => {
	const headerStyleCombined = {
		...headerStyle,
		backgroundColor: bgColor,
		color: textColor,
		fontFamily: font,
		backgroundImage: `url(${bgImage})`
	}

  return (
		<header style={headerStyleCombined}>
			<div style={containerStyle}>
				{title && <h1 style={titleStyle}>{title}</h1>}
				{subtitle && <h2 style={subtitleStyle}>{subtitle}</h2>}
			</div>
			{video && 
				<video style={videoStyle} autoPlay muted loop src={video} type='video/mp4'></video>
			}
		</header>
  );
}

FullHeader.propTypes = propTypes;
FullHeader.defaultProps = defaultProps;

export default FullHeader;
