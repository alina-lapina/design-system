import React, { useState } from 'react';
import LeadParagraph from '@atoms/LeadParagraph/LeadParagraph';
import Tabs from '@atoms/Tabs/Tabs';
import KeyNumbers from '@molecules/KeyNumbers/KeyNumbers';
import Divider from '@atoms/Divider/Divider';
import CodeSnippet from '@atoms/CodeSnippet/CodeSnippet';
import { Home } from 'react-feather';

const leadParagraphText = `
Key numbers are a visual element that showcases important numbers that wants to be prominently displayed.
Key numbers comes in 3 different sizes, each made for different type of placements.
The large key number is displayed in its own row, while the medium and smaller key numbers can be placed in groups of two in the same row.
`;

const accordionFillerText = `
This is paragraph text which explains the accordion, the rest of the text is just to fill it out and show the space it takes.
`;

const overviewText = `
Key numbers comprises of 5 visual elements, a label describing the key number, the year, the key number, the description of the number and if necessary a text that describes the change number.
`;

const secondaryAccordionText = `
Secondary accordion are used when the content is not necessary for the user in order to understand the page but still 
important information to be available for viewing if needed. This can include authors, definitions,
 background etc and is there to be viewed by the user if they choose to.
`;

const tabItems = [
	{
		title: 'Overview',
		path: '/overview',
	}, {
		title: 'Rationale',
		path: '/rationale',
	}, {
		title: 'Accessibility',
		path: '/accessibility',
	},
];

const codeExample = `
<KeyNumbers
	number="789 398"
	title="Antall husholdninger"
	numberDescription="husholdninger"
	year="2018"
	size="small"
	icon={<Home size="240" />}
/>
`;

const AccordionInfo = () => {
	const [activeTab, changeTab] = useState(tabItems[0].path);
	const tabClicked = e => {
		changeTab(e);
	};

	return (
		<div className="col-lg-12">
			<h1>Key Numbers</h1>
			<LeadParagraph>
				{leadParagraphText}
			</LeadParagraph>
			<Tabs activeOnInit={tabItems[0].path} items={tabItems} onClick={tabClicked} />
			<Divider />
			{activeTab === '/overview' && (
				<div className="mt-3">
					<div className="row mb-3">
						<h3 className="col-lg-12">Key Numbers</h3>
						<div className="col-lg-6">
							<p>{overviewText}</p>
						</div>
						<div className="col-lg-6">
							<KeyNumbers
								number="789 398"
								title="Antall husholdninger"
								numberDescription="husholdninger"
								year="2018"
								size="small"
								icon={<Home size="140" />}
							/>
						</div>
						<div className="col-lg-12 mt-3">
							<CodeSnippet code={codeExample} language="jsx" />
						</div>
					</div>
				</div>
			)}
			{activeTab === '/rationale' && (
				<div className="mt-3">
					<div className="row mb-3">
						<h3 className="col-lg-12">Element sizes</h3>
						<div className="col-lg-6">
							As seen in all different sizes of key numbers, only the key number itself changes size while all other elements retains the same size. This choice was made so that a clear design structure could be created and followed.
						</div>
						<div className="col-lg-12 mt-3 mb-3">
							<KeyNumbers
								number="789 398"
								title="Antall husholdninger"
								numberDescription="husholdninger"
								year="2018"
								size="large"
								icon={<Home size="280" />}
							/>
						</div>
						<div className="col-lg-12 mt-3 mb-3">
							<KeyNumbers
								number="789 398"
								title="Antall husholdninger"
								numberDescription="husholdninger"
								year="2018"
								size="medium"
								icon={<Home size="210" />}
							/>
						</div>
						<div className="col-lg-12 mt-3 mb-3">
							<KeyNumbers
								number="789 398"
								title="Antall husholdninger"
								numberDescription="husholdninger"
								year="2018"
								size="small"
								icon={<Home size="140" />}
							/>
						</div>
					</div>
				</div>
			)}
		</div>
	);
};

export default AccordionInfo;
