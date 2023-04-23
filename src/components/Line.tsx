import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLine } from "@fortawesome/free-brands-svg-icons";

export function Line(): JSX.Element {
	const link = "";

	return (
		<a
			className="btn line"
			href={link}
			aria-label="LINEで共有する"
		>
			<span className="iconWrap">
				<FontAwesomeIcon icon={faLine} color="#ffffff" />
			</span>
		</a>
	);
}
