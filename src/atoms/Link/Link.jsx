import React from 'react';
import PropTypes from 'prop-types';

const Link = ({
	href, icon, isExternal, linkType, text,
}) => (
	<div className="link">
		<div className="index">
			<a
				className={`link-text ${linkType} ${icon && 'with-icon'}`}
				href={href}
				target={isExternal ? '_blank' : ''}
				rel={isExternal ? 'noopener noreferrer' : ''}
			>{icon}<span className="link-text">{text}</span> {/* TODO: Add proper icon and give it higher z-index */}
			</a>
		</div>
		<div className="animate-background" />
	</div>
);

Link.defaultProps = {
	isExternal: false,
	linkType: 'regular',
};

Link.propTypes = {
	href: PropTypes.string.isRequired,
	icon: PropTypes.element,
	isExternal: PropTypes.bool,
	linkType: PropTypes.oneOf([
		'regular',
		'profiled',
		'header',
	]),
	text: PropTypes.string.isRequired,
};

export default Link;

/*
options:
	href: required string for url
	icon: optional element for displaying a left side icon
	isExternal: optional boolean which makes the link open in new tab
	linkType: optional styling profiles
	text: required string for text
 */
