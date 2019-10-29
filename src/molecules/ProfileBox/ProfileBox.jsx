import React from 'react';
import PropTypes from 'prop-types';
import { Link, Paragraph } from '@statisticsnorway/ssb-component-library';

const ProfileBox = ({
	link, text, title,
}) => (
	<div className="profile-box-wrapper">
		<Link href={link} linkType="header">{title}</Link>
		<Paragraph>{text}</Paragraph>
	</div>
);

ProfileBox.defaultProps = {};

ProfileBox.propTypes = {
	link: PropTypes.string,
	text: PropTypes.string,
	title: PropTypes.string,
};

export default ProfileBox;