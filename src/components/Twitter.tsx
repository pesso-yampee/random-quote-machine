import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";

type Props = {
	link: string;
};

export function Twitter(props: Props): JSX.Element {
	const { link } = props;

	return (
		<a
			className="btn twitter"
			href={link}
			aria-label="Twitterで共有する"
		>
			<span className="iconWrap">
				<FontAwesomeIcon icon={faTwitter} color="#ffffff" />
			</span>
		</a>
	);
}
