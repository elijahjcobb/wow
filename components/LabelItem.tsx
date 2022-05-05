import { FC, ReactNode } from "react";
import { IconType } from "react-icons/lib";

export interface LabelItemProps {
	icon: IconType;
	title: string;
	value: string;
}

export const LabelItem: FC<LabelItemProps> = props => {
	return <>
		<style jsx>{`
			.container {
				display: flex;
				flex-direction: row;
				width: 100%;
				align-items: center;
				list-style: none;
				font-size: 1.125em;
			}
			.container > * {
				display: block;
			}
			.icon {
				width: 64px;
				height: 64px;
				margin-right: 8px;
			}
			.title {
				margin: 0 16px;
				font-weight: bolder;
				font-size: 1.5em;
			}
			.value {
				flex-grow: 2;
				text-align: right;
			}
		`}</style>
		<li className="container">
			{<props.icon className="icon" />}
			<span className="title">{props.title}</span>
			<span className="value">{props.value}</span>
		</li>
	</>;
}