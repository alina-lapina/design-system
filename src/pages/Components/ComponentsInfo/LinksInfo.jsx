import React, { useState } from 'react';
import { ArrowRight } from 'react-feather';
import CodeSnippet from '@components/CodeSnippet/CodeSnippet';
import { Divider, LeadParagraph, Link, Paragraph, Tabs, Title } from '@statisticsnorway/ssb-component-library';

const tabItems = [
	{
		title: 'Oversikt',
		path: '/overview',
	}, {
		title: 'Begrunnelse',
		path: '/rationale',
	}, {
		title: 'Props',
		path: '/props',
	},
];

const tabCode = [
	{
		title: 'React',
		path: '/react',
	}, {
		title: 'Html',
		path: '/html',
	},
];

const ordinaryLink = `
<Link href="">This is a clickable text link</Link>
<Link negative href="">This is a clickable text link</Link>
`;

const ordinaryLinkHtml = `
<a class="ssb-link" href=" " target="" rel="">
  <span class="link-text">This is a clickable text link</span>
</a>

<a class="ssb-link negative" href=" " target="" rel="">
  <span class="link-text">This is a clickable text link</span>
</a>
`;

const iconLinks = `
<Link href=" " icon={<ArrowRight size="20" />}>This is a link with an icon</Link>
<Link negative href=" " icon={<ArrowRight size="20" />}>This is a link with an icont</Link>
`;

const iconLinksHtml = `
<a class="ssb-link with-icon" href=" " target="" rel="">
    <div class="icon-wrapper">
        {insert icon here}
    </div>
    <span class="link-text">This is a link with an icon</span>
</a>

<a class="ssb-link negative with-icon" href=" " target="" rel="">
    <div class="icon-wrapper">
        {insert icon here}
    </div>
    <span class="link-text">This is a link with an icon</span>
</a>
`;

const profiledLinks = `
<Link href=" " linkType="profiled">This is a profiled text link</Link>
<Link negative href=" " linkType="profiled">This is a profiled text link</Link>
`;

const profiledLinksHtml = `
<a class="ssb-link" href=" " target="" rel="">
  <span class="link-text">This is a profiled text link</span>
</a>

<a class="ssb-link negative" href=" " target="" rel="">
  <span class="link-text">This is a profiled text link</span>
</a>
`;

const profiledLinksIcon = `
<Link href=" " linkType="profiled" icon={<ArrowRight size="20" />}>This is a profiled link with icon</Link>
<Link negative href=" " linkType="profiled" icon={<ArrowRight size="20" />}>This is a profiled link with icon</Link>
`;

const profiledLinksIconHtml = `
<a class="ssb-link profiled with-icon" href=" " target="" rel="">
    <div class="icon-wrapper">
        {insert icon here}
    </div>
    <span class="link-text">This is a profiled link with icon</span>
</a>

<a class="ssb-link negative profiled with-icon" href=" " target="" rel="">
    <div class="icon-wrapper">
        {insert icon here}
    </div>
    <span class="link-text">This is a profiled link with icon</span>
</a>
`;

const headerLinks = `
<Link href=" " linkType="header">This is an header link</Link>
<Link negative href=" " linkType="header">This is an header link</Link>
`;

const headerLinksHtml = `
<a class="ssb-link header" href=" " target="" rel="">
  <span class="link-text">This is an header link</span>
</a>

<a class="ssb-link header negative" href=" " target="" rel="">
  <span class="link-text">This is an header link</span>
</a>
`;

const linkList = `
<Link href=" " linkType="header">This is a clickable text link in a link list</Link>
<Link href=" " linkType="header">This is a clickable text link in a link list</Link>
<Link href=" " linkType="header">This is a clickable text link in a link list</Link>
`;

const linkListHtml = `
<a class="ssb-link" href=" " target="" rel="">
	<span class="link-text">This is a clickable text link in a link list</span>
</a>
<a class="ssb-link" href=" " target="" rel="">
	<span class="link-text">This is a clickable text link in a link list</span>
</a>
<a class="ssb-link" href=" " target="" rel="">
	<span class="link-text">This is a clickable text link in a link list</span>
</a>
`;

const LinksInfo = () => {
	const [activeTab, changeTab] = useState(tabItems[0].path);
	const [activeCodeTab, changeCodeTab] = useState(tabCode[0].path);
	const tabClicked = e => changeTab(e);
	const tabCodeClicked = e => changeCodeTab(e);

	return (
		<div className="col-lg-12">
			<Title size={1}>Link</Title>
			<LeadParagraph>
				Lenker stiles slik at det er lett å forstå at de er klikkbare og tar brukeren til andre sider.
				De kan stå enkeltvis, i brødtekst eller settes sammen til lenkelister. Lenker stiles etter UU-krav.
				Lenketeksten skal gi brukeren en tydelig indikasjon på lenkens funksjon.
			</LeadParagraph>

			<Tabs activeOnInit={tabItems[0].path} items={tabItems} onClick={tabClicked} />
			<Divider className="mb-3" />
			{activeTab === '/overview' && (
				<div>
					<div className="row mb-3">
						<Title size={2} className="col-lg-12">Link</Title>
						<div className="col-lg-6">
							<Paragraph>
								Standard lenke følger stilen til brødtekst, men er understreket og har grønn farge for å skille den fra ikke-klikkbar tekst.
								Kan stå alene eller sammen med flere i lenkeliste. Den kan også brukes i brødtekst.
							</Paragraph>
						</div>
						<div className="component-example col-lg-6 divider-left d-flex flex-column align-items-center">
							<div className="d-flex justify-content-center mb-4 flex-wrap component-wrapper">
								<Link href=" ">This is a clickable text link</Link>
							</div>
							<div className="d-flex justify-content-center flex-wrap negative-wrapper">
								<Link href=" " negative>This is a clickable text link</Link>
							</div>
						</div>

						<div className="col-lg-12 mt-4">
							<Tabs activeOnInit={tabCode[0].path} items={tabCode} onClick={tabCodeClicked} />
							<Divider light />
							{activeCodeTab === '/react' && <CodeSnippet code={ordinaryLink} language="jsx" />}
							{activeCodeTab === '/html' && <CodeSnippet code={ordinaryLinkHtml} language="html" />}
						</div>


					</div>

					<Divider light className="mb-3" />

					<div className="row mb-3">
						<Title size={2} className="col-lg-12">Link with icon</Title>
						<div className="col-lg-6">
							<Paragraph>
								Lenker med ikon brukes som frittstående lenker. Flere lenker med ikon kan settes sammen til lenkeliste.
								Ikonet brukes for å differensiere eller indikere ulik funksjonalitet. Ikonet skal alltid gi brukeren økt forståelse for lenkens funksjon.
							</Paragraph>
						</div>
						<div className="component-example col-lg-6 divider-left d-flex flex-column align-items-center">
							<div className="d-flex justify-content-center mb-4 flex-wrap component-wrapper">
								<Link href=" " icon={<ArrowRight size="20" />}>This is a link with an icon</Link>
							</div>
							<div className="d-flex justify-content-center flex-wrap negative-wrapper">
								<Link negative href=" " icon={<ArrowRight size="20" />}>This is a link with an icon</Link>
							</div>
						</div>
						<div className="col-lg-12">
							<Tabs activeOnInit={tabCode[0].path} items={tabCode} onClick={tabCodeClicked} />
							<Divider light />
							{activeCodeTab === '/react' && <CodeSnippet code={iconLinks} language="jsx" />}
							{activeCodeTab === '/html' && <CodeSnippet code={iconLinksHtml} language="html" />}
						</div>
					</div>

					<Divider light className="mb-3" />

					<div className="row mb-3">
						<Title size={2} className="col-lg-12">Profiled link</Title>
						<div className="col-lg-6">
							<Paragraph>
								Profilerte lenker brukes der man ønsker en lenke som gjør mer ut av seg enn en standard lenke. Innholdet lenken tar deg til er av stor betydning for brukeren.
								Profilert lenke kan brukes i kombinasjon med andre typer lenker for å skape hierarki. Skal aldri ta brukeren til ekstern side.
							</Paragraph>
						</div>
						<div className="component-example col-lg-6 divider-left d-flex flex-column align-items-center">
							<div className="d-flex justify-content-center mb-4 flex-wrap component-wrapper">
								<Link className="mr-4" href=" " linkType="profiled">This is a profiled text link</Link><br />
							</div>
							<div className="d-flex justify-content-center flex-wrap negative-wrapper">
								<Link negative className="mr-4" href=" " linkType="profiled">This is a profiled text link</Link><br />
							</div>
						</div>
						<div className="col-lg-12">
							<Tabs activeOnInit={tabCode[0].path} items={tabCode} onClick={tabCodeClicked} />
							<Divider light />
							{activeCodeTab === '/react' && <CodeSnippet code={profiledLinks} language="jsx" />}
							{activeCodeTab === '/html' && <CodeSnippet code={profiledLinksHtml} language="html" />}
						</div>
					</div>

					<Divider light className="mb-3" />

					<div className="row mb-3">
						<Title size={2} className="col-lg-12">Profiled link with icon</Title>
						<div className="col-lg-6">
							<Paragraph>
								Se forklaring under «Profiled Link». Ikonet brukes for å differensiere eller indikere ulik funksjonalitet.
								Ikonet skal alltid gi brukeren økt forståelse for lenkens funksjon. Skal aldri ta brukeren til ekstern side.
							</Paragraph>
						</div>
						<div className="component-example col-lg-6 divider-left d-flex flex-column align-items-center">
							<div className="d-flex justify-content-center mb-4 flex-wrap component-wrapper">
								<Link className="mr-4" href=" " icon={<ArrowRight size="20" />} linkType="profiled">This is a profiled link with icon</Link><br />
							</div>
							<div className="d-flex justify-content-center flex-wrap negative-wrapper">
								<Link negative className="mr-4" href=" " icon={<ArrowRight size="20" />} linkType="profiled">This is a profiled link with icon</Link><br />
							</div>
						</div>
						<div className="col-lg-12">
							<Tabs activeOnInit={tabCode[0].path} items={tabCode} onClick={tabCodeClicked} />
							<Divider light />
							{activeCodeTab === '/react' && <CodeSnippet code={profiledLinksIcon} language="jsx" />}
							{activeCodeTab === '/html' && <CodeSnippet code={profiledLinksIconHtml} language="html" />}
						</div>
					</div>

					<Divider light className="mb-3" />

					<div className="row mb-3">
						<Title size={2} className="col-lg-12">Header link</Title>
						<div className="col-lg-6">
							<Paragraph>
								Tittellenke brukes der det er naturlig at tittelen er lenken. For eksempel kan dette brukes i innganger til artikler hvor titlene er beskrivende for innholdet.
								Tittellenke kan også brukes der det er vanskelig å finne lenketekst som erstatter «Les mer».
							</Paragraph>
						</div>
						<div className="component-example col-lg-6 divider-left d-flex flex-column align-items-center">
							<div className="d-flex justify-content-center mb-4 flex-wrap component-wrapper">
								<Link href=" " linkType="header">This is an header link</Link>
							</div>
							<div className="d-flex justify-content-center flex-wrap negative-wrapper">
								<Link href=" " linkType="header" negative>This is an header link</Link>
							</div>
						</div>
						<div className="col-lg-12">
							<Tabs activeOnInit={tabCode[0].path} items={tabCode} onClick={tabCodeClicked} />
							<Divider light />
							{activeCodeTab === '/react' && <CodeSnippet code={headerLinks} language="jsx" />}
							{activeCodeTab === '/html' && <CodeSnippet code={headerLinksHtml} language="html" />}
						</div>
					</div>

					<Divider light className="mb-3" />

					<div className="row mb-3">
						<Title size={2} className="col-lg-12">Link list</Title>
						<div className="col-lg-6">
							<Paragraph>
								Standard lenke og standard lenke med ikon kan settes sammen til lenkeliste. Lenkelister brukes uten kulepunkter.
							</Paragraph>
						</div>
						<div className="component-example col-lg-6 divider-left d-flex flex-column align-items-center">
							<div className="d-flex justify-content-center mb-4 flex-wrap component-wrapper">
								<Link href=" ">This is a clickable text link in a link list</Link>
								<Link href=" ">This is a clickable text link in a link list</Link><br />
								<Link href=" ">This is a clickable text link in a link list</Link><br />
							</div>
						</div>
						<div className="col-lg-12">
							<Tabs activeOnInit={tabCode[0].path} items={tabCode} onClick={tabCodeClicked} />
							<Divider light />
							{activeCodeTab === '/react' && <CodeSnippet code={linkList} language="jsx" />}
							{activeCodeTab === '/html' && <CodeSnippet code={linkListHtml} language="html" />}
						</div>
					</div>
				</div>
			)}

			{activeTab === '/rationale' && (
				<div className="mt-3">
					<div className="row mb-3">
						<Title size={2} className="col-lg-12">Farge</Title>
						<div className="col-lg-6">
							<Paragraph>
								Fargen på lenker er SSB grønn 4. Denne fargen er valgt for å passe inn i helheten i  designsystemet,
								og samtidig lære brukeren at grønn farge alltid er klikkbart på ssb.no.
							</Paragraph>
						</div>
					</div>
				</div>
			)}

			{activeTab === '/props' && (
				<div>
					<Title size={2} className="mb-3">Props</Title>
					<table className="col-lg-12 mb-3">
						<thead style={{ textAlign: 'left' }}>
							<tr>
								<th><Title size={3}>Prop name</Title></th>
								<th><Title size={3}>Type</Title></th>
								<th><Title size={3}>Description</Title></th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td><code>children</code></td>
								<td>node</td>
								<td>Required. Something that renders to wrap the link around</td>
							</tr>
							<tr>
								<td><code>className</code></td>
								<td>string</td>
								<td>Optional container class</td>
							</tr>
							<tr>
								<td><code>href</code></td>
								<td>string</td>
								<td>Required. Destination for navigation</td>
							</tr>
							<tr>
								<td><code>icon</code></td>
								<td>node</td>
								<td>Renders an icon</td>
							</tr>
							<tr>
								<td><code>isExternal</code></td>
								<td>bool</td>
								<td>Will make the link open in new tab. Defaults to <code>false</code></td>
							</tr>
							<tr>
								<td><code>linkType</code></td>
								<td>string</td>
								<td>
									Changes the style. Can be &apos;regular&apos;, &apos;profiled&apos;, or &apos;header&apos;.
									Defaults to &apos;regular&apos;.
								</td>
							</tr>
							<tr>
								<td><code>negative</code></td>
								<td>bool</td>
								<td>Will change component style. Defaults to <code>false</code></td>
							</tr>
						</tbody>
					</table>
				</div>
			)}

		</div>
	);
};

LinksInfo.defaultProps = {};

LinksInfo.propTypes = {};

export default LinksInfo;
