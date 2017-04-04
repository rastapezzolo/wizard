const SingleInstrument = ({ active, img, url, title, description }) => {
	return (
		<li>
			<a href={url}>
			<span>{title}</span>
			<img src={img} />
			<p>{description}</p>
		</li>
	)
}

SingleInstrument.propTypes = {
	active: React.PropTypes.bool,
	img: React.PropTypes.string,
	url: React.PropTypes.string,
	title: React.PropTypes.string,
	description: React.PropTypes.string,
};