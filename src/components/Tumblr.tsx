import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faTumblr } from "@fortawesome/free-brands-svg-icons";

type Props = {
	color: string;
};

export function Tumblr(props: Props): JSX.Element {
	const { color } = props;
	const link =
		"https://www.tumblr.com/login?redirect_to=https%3A%2F%2Fwww.tumblr.com%2Fwidgets%2Fshare%2Ftool%3Fposttype%3Dquote%26tags%3Dquotes%252Cfreecodecamp%26caption%3DMae%2BJemison%26content%3DIt%25E2%2580%2599s%2Byour%2Bplace%2Bin%2Bthe%2Bworld%253B%2Bit%25E2%2580%2599s%2Byour%2Blife.%2BGo%2Bon%2Band%2Bdo%2Ball%2Byou%2Bcan%2Bwith%2Bit%252C%2Band%2Bmake%2Bit%2Bthe%2Blife%2Byou%2Bwant%2Bto%2Blive.%26canonicalUrl%3Dhttps%253A%252F%252Fwww.tumblr.com%252Fbuttons%26shareSource%3Dtumblr_share_button";

	return (
		<a
			className="btn"
			href={link}
			style={{
				backgroundColor: color
			}}
		>
			<span className="iconWrap">
				<FontAwesomeIcon icon={faTumblr} color="#ffffff" />
			</span>
		</a>
	);
}
