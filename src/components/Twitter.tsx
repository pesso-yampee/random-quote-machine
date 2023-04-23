import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";

type Props = {
	color: string;
	link: string;
};

export function Twitter(props: Props): JSX.Element {
	const { color, link } = props;

	return (
		<a
			className="btn"
			href={link}
			style={{
				backgroundColor: color
			}}
		>
			<span className="iconWrap">
				<FontAwesomeIcon icon={faTwitter} color="#ffffff" />
			</span>
		</a>
	);
}
