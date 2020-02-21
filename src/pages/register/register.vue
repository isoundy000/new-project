<template>
  <div class="register">
    <div class="mask" v-if="isyonghu">
      <div class="maskDiv">
        <img @click="chachanew" class="chachanew" src="../../../static/image/login/chachanew.png" alt="">
        <div class="maskDivText">
          <p class="maskDivTextP">超级签名服务条款</p>
          <p class="newp1">超级签名（除非特别说明，本服务协议所提及的超级签名包括 {{wangzhi}} 网站）为您提供的一切服务受本服务协议项下条款和条件的约束。</p>
          <p class="newp1">使用超级签名也就意味着您同意本服务协议及超级签名对其不时所做的修订。</p>
          <div class="maskDivTextSmall">
            <p class="newp2">第一条：使用之前提</p>
            <p class="newp3">•	1. 通过使用超级签名所提供的信息，工具以及其他功能，借助任何超级签名的API，或者经由超级签名接口的任何软件、其它网站，或者它的 API（以上统称“服务”），都表示您同意遵守本服务协议，无论您是一个非注册用户，或者您是一个注册用户。</p>
            <p class="newp3">•	2. 如果您想成为注册用户并使用超级签名提供的服务，您必须阅读并接受本服务协议。只要您注册成为超级签名的用户（无论是通过超级签名还是通过其他第三方媒介，下同）就视为您接受了本服务协议。如果您接受本服务协议，则表示您有能力受其约束，或者，如果您代表了一个公司或实体，您有权使该实体受其约束。</p>
            <p class="newp2">第二条：行为准则</p>
            <p class="newp3">•	1. 一旦您接收了本服务协议项下的条款和条件，即表示您同意在使用服务时遵守以下规则。您理解并同意，如果您违反了以下规则，所出现的任何后果由您自行承担，超级签名对此不负有任何责任。</p>
            <p class="newp3">o	• 1.1 不得利用超级签名提供的服务从事任何非法活动，不发布违反国家相关法律法规及政策规定的内容；</p>
            <p class="newp3">o	• 1.2 不得利用超级签名危害国家安全，泄露国家秘密，颠覆国家政权，破坏国家统一；</p>
            <p class="newp3">o	• 1.3 不得利用超级签名损害国家荣誉和利益；</p>
            <p class="newp3">o	• 1.4 不得利用超级签名煽动民族仇恨、民族歧视，破坏民族团结；</p>
            <p class="newp3">o	• 1.5 不得利用超级签名破坏国家宗教政策，宣扬邪教和封建迷信；</p>
            <p class="newp3">o	• 1.6 不得利用超级签名散布谣言，扰乱社会秩序，破坏社会稳定；</p>
            <p class="newp3">o	• 1.7 不得利用超级签名散布淫秽、色情、赌博、暴力、凶杀、恐怖或者教唆犯罪；</p>
            <p class="newp3">o	• 1.8 不得利用超级签名侮辱或者诽谤他人，侵害他人合法权益；</p>
            <p class="newp3">o	• 1.9 不得利用超级签名侵害他人知识产权、商业秘密等合法权益；</p>
            <p class="newp3">o	• 1.10 不得利用超级签名恶意虚构事实、隐瞒真相以误导、欺骗他人；</p>
            <p class="newp3">o	• 1.11 不得利用超级签名发布、传送、传播垃圾信息；</p>
            <p class="newp3">o	• 1.12 不得向超级签名上传任何恶意代码、含有恶意行为的软件；</p>
            <p class="newp3">o	• 1.13 不得滥用超级签名所提供的资源或者服务，该等滥用包括但不限于重复应用、谋取不当利益等行为；</p>
            <p class="newp3">o	• 1.14 不得转让或继受、售卖超级签名的账号和密码，以谋取不当利益；</p>
            <p class="newp3">o	• 1.15 不得公开展示或使用服务共享不当内容或材料（例如，涉及裸体、兽行、色情、暴力画面或犯罪活动）以及不符合适用法律或法规要求的内容或材料（例如，侵犯知识产权的软件或图片、文字、代码等）；</p>
            <p class="newp3">o	• 1.16 不得从事虚假或误导性活动（例如编造虚假理由索要现金，假冒他人，操纵服务）或者中伤或诽谤活动；</p>
            <p class="newp3">o	• 1.17 不得规避服务的任何访问或可用性限制；</p>
            <p class="newp3">o	• 1.18 不得从事对服务或他人有害的活动（例如，传播病毒、跟踪、发布仇恨言论或宣扬针对他人的暴力行为）；</p>
            <p class="newp3">o	• 1.19 不得利用超级签名或其服务侵犯他人的合法权利；</p>
            <p class="newp3">o	• 1.20 不得利用超级签名从事侵犯他人隐私或数据保护权利的活动；</p>
            <p class="newp3">o	• 1.21 不得利用超级签名传播含有违反国家法律的金融、股票、理财、贷款、赌博等软件或App；</p>
            <p class="newp3">o	• 1.21 不得利用超级签名传播含有违反国家法律的金融、股票、理财、贷款、赌博等软件或App；</p>
            <p class="newp3">o	• 1.22 其他法律法规禁止的行为；</p>
            <p class="newp3">o	• 1.23 不得帮助他人违反上述规则。</p>
            <p class="newp3">•	2. 强制执行。如果您违反本服务协议项下的条款和条件，超级签名有权在不提前通知您的情况下采取合理且适当的措施以维护超级签名以及其他用户的合法及正当利益，该等措施包括但不限于停止为您提供服务、关闭您的超级签名账户、删除您在超级签名上发布的内容和信息，并保存相关记录及向有关政府主管部门举报。在对涉嫌违反本服务协议项下条款和条件的行为进行调查时，超级签名将保留对您的内容进行审查以便解决问题的权利。</p>
            <p class="newp2">第三条：版权</p>
            <p class="newp3">•	1. 超级签名包含的所有内容，包括但不限于文本，图形，徽标，按钮图标，图像，音频剪辑，数码下载，数据编译，软件以及内容汇编成一体的连贯的网站都属于超级签名所有，并受中国和国际版权法的保护。严禁未经超级签名书面允许即对其上述内容进行复制、使用或者进行其他非法利用。</p>
            <p class="newp3">•	2. 超级签名的所有注册用户向超级签名平台所提供的 App（手机应用程序）应当保证拥有完整独立的知识产权，包括但不限于外观设计，著作权。</p>
            <p class="newp2">第四条：商标和服务标记</p>
            <p class="newp3">•	超级签名 , 超级签名标志和其他超级签名图形、标识、网页标题、按钮图标、脚本和服务名称均为超级签名及关联公司的商标、证明商标、服务标记或其它商业外观。超级签名的商标、证明商标、服务标记和商业外观由于它们的限制使用而具有固有的意义和重大价值。它们不会被用于未经超级签名许可的任何有关产品或服务。</p>
            <p class="newp2">第五条：访问许可</p>
            <p class="newp3">•	考虑到访问超级签名和其服务，超级签名将授予您一个访问超级签名和用于个人使用的有限许可。本服务协议禁止您下载 （页面缓存除外）或修改超级签名的任何部分，除非得到超级签名明确的书面同意。本服务协议不允许转售超级签名的服务。在未经超级签名明确书面同意的情况下，您不得使用超级签名上的任何商标、标识或其它专有的信息(包括但不限于图像、文本、网页布局或表单)。任何未经授权的使用自动终止了超级签名授予的允许或许可，并可能产生各种损害赔偿的法律责任。</p>
            <p class="newp2">第六条：账户、密码、资质材料</p>
            <p class="newp3">•	1. 如果您注册成为超级签名的用户并因此创建了一个账户，您需自行负责维护您的账户和密码的机密性，并且您同意接受对在您的账户或密码下发生的所有活动负责。超级签名无义务且没有办法对非法或未经您授权使用您账号和密码的行为进行识别，因此，超级签名对前述行为所引起的一切责任及其他不利后果不承担任何责任。但超级签名保留以下权利：自行裁定权、拒绝服务、暂停或终止账户或以其他方式限制访问超级签名和接受超级签名的其他任何服务。</p>
            <p class="newp3">•	2. 您保证：您具备使用本服务、接入和运营应用或提供相关服务等行为的相关合法资质或经过了相关政府部门的审核批准；您提供的主体资质材料、相关资质或证明以及其他任何文件等信息真实、准确、完整，并在信息发生变更后，及时进行更新；您具备履行本协议项下之义务、各种行为的能力；您履行相关义务、从事相关行为不违反任何对您有约束力的法律文件。否则，您应不使用超级签名提供的相关服务，且应独自承担由此带来的一切责任及给用户、超级签名造成的全部损失。</p>
            <p class="newp3">•	3. 您保证：您会依法及按照超级签名要求提交使用本服务所必须的真实、准确的经过您签章确认的主体资质材料以及联系人姓名（名称）、地址、电子邮箱等相关资料。</p>
            <p class="newp3">•	4. 您保证：您在超级签名上通过您的应用提供的各种服务，依法已经具有相关的合法资质或获得了有关部门的许可或批准，并会向超级签名提交相关资质或证明文件。</p>
            <p class="newp3">•	5. 您保证：您在超级签名上通过您的应用提供的各种服务，符合国家相关法规的规定，不违反任何相关法规及相关协议、规则，也不会侵犯任何人的合法权益， 同时，会依法、依约或按照超级签名的要求提供版权、专利权等相关证明文件。</p>
            <p class="newp2">第七条：隐私及数据信息安全</p>
            <p class="newp3">•	1. 使用本服务，即表示您同意超级签名合法收集和使用有关您及您所使用本服务的技术性或诊断性信息。收集到的些信息将用于改进网页的内容，提升我们的服务品质。超级签名不会将您的信息和内容分享或出售给其他的组织。但以下情况除外：</p>
            <p class="newp3">o	• 1.1 您同意让第三方共享资料；</p>
            <p class="newp3">o	• 1.2 超级签名需要听从法庭传票、法律命令或遵循法律程序；</p>
            <p class="newp3">o	• 1.3 您违反了本协议。</p>
            <p class="newp3">•	2. 超级签名会竭力保护您的数据信息安全与隐私，但如发生包括但不限于以下任一状况，超级签名将不承担任何法律责任：</p>
            <p class="newp3">o	• 2.1 因超级签名无法对非法的或未经用户授权的使用超级签名帐号及密码的行为作出甄别，因此造成您在超级签名的帐号及密码被窃取的；</p>
            <p class="newp3">o	• 2.2 您发布的应用程序包括任何可链接到该应用程序的网址或其他在线服务侵犯到第三方知识产权的；</p>
            <p class="newp3">o	• 2.3 您通过超级签名收集到的任何用户信息（包括但不限于用户设备信息等），不仅只供内测使用，还提供给任何第三方或另作他用的；</p>
            <p class="newp3">o	• 2.4 因不可抗力，计算机病毒或黑客攻击，系统不稳定，您所在位置无网络信号，关机，GSM网络、互联网络、通信线路原因等造成的服务中断或不能满足您的服务要求、造成您的数据丢失的。</p>
            <p class="newp2">第八条：服务或软件更新以及条款变更</p>
            <p class="newp3">•	1. 我们可能会随时变更本服务协议项下的条款和条件。如果您在该等条款和条件变更生效后使用服务，即表示您同意新的条款和条件。如果您不同意新的条款和条件，则必须停止访问超级签名并停止使用其服务，并请联系我们关闭您的超级签名帐户。</p>
            <p class="newp3">•	2. 有时，您可能需要软件更新，才能继续使用服务。我们会自动检查您的软件版本，并且下载软件更新或配置变更，包括那些可能会阻止您访问服务、或使用未经授权的硬件外围设备的配置变更，还可能要求您更新软件才能继续使用服务。此类更新受上述条款的约束，除非更新附带有其他条款，在这种情况下，其他条款应予适用。尽管有上述约定，超级签名没有义务提供任何更新，也不保证超级签名将针对您曾对软件进行许可的系统的版本提供支持。这种更新可能与由第三方提供的软件或服务不兼容。</p>
            <p class="newp3">•	3. 另外，有些时候，我们也许需要删除或更改服务的功能，或者停止提供一项服务，或者访问第三方应用程序和服务。除非适用的法律明确要求，否则我们无义务对已删除或更改之前的任何服务的功能或者服务提供重新下载或恢复。</p>
            <p class="newp2">第九条：保证</p>
            <p class="newp3">•	1. 超级签名不提供与您使用服务相关的任何明示或默示的保证、保障或条件。您已了解，您应自行承担服务使用风险，我们按“现状”提供服务，服务可能存在各种缺陷，并且只提供服务的目前可用功能。超级签名不保证服务中所提供的信息的准确性或时效性。根据适用法律，您可能享有某些权利，如果适用，本服务协议的条款中的任何规定均无意影响这些权利。您承认，计算机和电信系统可能会出现故障或偶尔会发生停机。我们不保证服务无中断、及时、安全、无错误、不发生内容丢失，也不会对与计算机网络的连接或传输作任何保证。</p>
            <p class="newp3">•	2. 在适用法律允许的范围内，我们排除有关适销性、质量满意度、特定用途的适用性、无技术问题和不侵权的任何默示保证。</p>
            <p class="newp2">第十条：责任限制</p>
            <p class="newp3">•	1. 超级签名仅对本协议中列明的责任承担范围负责。</p>
            <p class="newp3">•	2. 本协议约定服务之合作单位，所提供之服务品质及内容由该合作单位自行负责。</p>
            <p class="newp3">•	3. 在法律允许的情况下，超级签名对于与本协议有关或由本协议引起的任何间接的、惩罚性的、特殊的、派生的损失（包括业务损失、收益损失、利润损失、使用数据或其他经济利益的损失），不论是如何产生的，也不论是由对本协议的违约（包括违反保证）还是由侵权造成的，均不负有任何责任，即使事先已被告知此等损失的可能性。另外即使本协议规定的排他性救济没有达到其基本目的，也应排除超级签名对上述损失的责任。</p>
            <p class="newp3">•	4. 对于因超出超级签名合理控制范围的情况（例如劳资纠纷、不可抗力、战争或恐怖主义行为、恶意破坏、意外事故或遵守任何适用法律或政府命令）而导致超级签名无法履行或延迟履行其义务，超级签名对此不承担任何责任或义务。超级签名将尽最大努力降低这些事件的影响，并将尽最大努力履行未受影响的义务。</p>
            <p class="newp3">•	5. 超级签名的服务是按照现有技术和条件所能达到的现状提供的。超级签名会尽最大努力向您提供服务，确保服务的连贯性和安全性；但超级签名不能保证其所提供的服务毫无瑕疵，也无法随时预见和防范法律、技术以及其他风险，包括但不限于不可抗力、病毒、木马、黑客攻击、系统不稳定、第三方服务瑕疵、政府行为等原因可能导致的服务中断、数据丢失以及其他的损失和风险。所以您也同意：即使超级签名提供的服务存在瑕疵，但上述瑕疵是当时行业技术水平所无法避免的，其将不被视为超级签名违约，同时，由此给您造成的数据或信息丢失等损失的，您同意放弃追究超级签名的责任。</p>
            <p class="newp3">•	6. 您承诺您使用本服务及您的任何行为，不得违反任何相关法律法规、本协议及相关协议、规则等，不得侵犯任何主体的合法权益等。若超级签名自行发现或根据相关部门的信息、权利人的投诉等发现您可能存在违反前述承诺情形的，超级签名有权根据一般人的认识自己独立判断，以认定您是否存在违反前述承诺的情形。若超级签名经过判断认为您存在违反前述承诺的情形，超级签名有权随时单方采取以下一项或多项措施：</p>
            <p class="newp3">o	• 6.1 要求您立即更换、修改侵犯他人合法权益的相关内容，在您更正前，暂停向您或您关联公司支付涉嫌违规应用或您以及您关联公司名下其他任何一款应用或全部应用的收益；</p>
            <p class="newp3">o	• 6.2 对涉嫌违规应用或您以及您关联公司名下的其他全部应用或任何一款应用采取封闭新用户入口、限制老用户登录等措施；</p>
            <p class="newp3">o	• 6.3 对涉嫌违规应用或您以及您关联公司名下的其他全部应用或任何一款应用采取下线措施，即终止应用在开放平台的运营；</p>
            <p class="newp3">o	• 6.4 暂停向您或您关联公司支付任何费用；</p>
            <p class="newp3">o	• 6.5 从应向您或您关联公司支付的任何款项中直接扣减超级签名遭受的损失或者应由您承担的相应金额的违约金；</p>
            <p class="newp3">o	• 6.6 禁止您或您关联公司今后将任何新应用接入开放平台；</p>
            <p class="newp3">o	• 6.7 中止或终止涉嫌违规应用或您以及您关联公司名下的其他全部应用或任何一款应用，在超级签名开放平台之外的平台、网站的宣传、推广、发布行为；</p>
            <p class="newp3">o	• 6.8 追究您的法律责任，或同时单方终止本协议；</p>
            <p class="newp3">o	• 6.9 将您的行为对外予以公告，向主管机关或投诉人、权利人提供您的有效信息；</p>
            <p class="newp3">o	• 6.10 其他超级签名认为适合的处理措施</p>
            <p class="newp3">•	7. 在超级签名告知您或您自行得知您存在侵犯他人合法权益情形后，您应根据超级签名客服渠道向超级签名提出反通知。但是，无论超级签名是否告知您、您是否提出反通知或反通知是否符合相关法规、超级签名要求等，均不影响超级签名进行自己的独立判断和采取相关措施。</p>
            <p class="newp3">•	8. 若超级签名按照上述条款、本协议的其他相关约定或因您违反相关法律的规定，对您或您的应用采取任何行为或措施，所引起的纠纷、责任等一概由您自行负责，造成您损失的，您应自行全部承担，造成超级签名或他人损失的，您也应承担全部责任。</p>
            <p class="newp3">•	9. 若超级签名按照上述条款、本协议的其他相关约定或因您违反相关法律的规定，对您或您的应用采取任何行为或措施后，导致您没有使用到相应服务但已经缴纳相应费用的，对该部分费用，超级签名有权不予退还，而作为您违反约定的违约金予以没收。</p>
            <p class="newp3">•	10. 因您违约导致超级签名终止本协议的，尚未结算的应用收益，超级签名有权不予结算，而作为违约金归超级签名所有。此外，因您违反本协议约定，所引起的纠纷、责任等一概由您自行负责，造成超级签名损失的（包括但不限于被主管机关罚款、赔偿权利人损失、律师费、诉讼费等），您应在5个工作日内赔偿超级签名全部损失。</p>
            <p class="newp3">•	11. 您同意并承诺，在您使用超级签名所提供服务的过程中，您不得向超级签名上传含有违反国家相关法律法规及政策规定内容，包括但不限于代码、软件、图片、视频、文字、App等。否则，出现的所有法律后果由您自行全部承担，超级签名对此不负任何责任。</p>
            <p class="newp3">•	12. 超级签名作为第三方中立平台，不具有对您上传至超级签名的内容进行审查的义务，但超级签名在认为有需要时，超级签名有权利对您上传至超级签名服务的内容进行审查，审查结果及审查后的进一步动作可由超级签名进行自行裁定。您对此表示理解并同意，并愿意承担因审查出现的全部后果。</p>
            <p class="newp2">第十一条：应用程序</p>
            <p class="newp3">•	1. 许可范围。</p>
            <p class="newp3">超级签名提供的应用程序只授予使用许可，而非出售。本协议只授予您使用应用程序的某些权利。除非适用的法律赋予您此项限制之外的更多权利，否则您仅可在本协议明示许可的范围内使用应用程序。为此，您必须遵守应用程序中的任何技术限制，这些限制只允许您以特定的方式使用应用程序。您不得：</p>
            <p class="newp3">o	• 1.1 绕过应用程序中的任何技术限制。</p>
            <p class="newp3">o	• 1.2 对应用程序进行反向工程、反向编译或反汇编；尽管有此项限制，但如果适用法律明示允许上述活动，则在且仅在适用法律明示允许的范围内从事上述活动不在此限。</p>
            <p class="newp3">o	• 1.3 制作超过本服务协议所规定或适用的法律所允许数量的应用程序副本。</p>
            <p class="newp3">o	• 1.4 发布或以其他方式提供应用程序以便其他人复制。</p>
            <p class="newp3">o	• 1.5 出租、租赁或出借应用程序。</p>
            <p class="newp3">o	• 1.6 将应用程序或本服务协议转让给任何第三方。</p>
            <p class="newp3">•	2. 下载。应用程序的下载可能会消耗网络流量，因此而产生的费用，将由您自行承担。</p>
            <p class="newp3">•	3. 超级签名会随时清理其上含有包括但不限于色情内容、垃圾信息、积分墙、游戏私服、病毒、翻墙、反动、盗版软件、恶意扣费、破解软件等恶意应用程序，但您在下载应用程序前请自行甄别应用程序的质量，请勿因为垃圾短信、邮件内容随意下载来源不可靠的应用程序，请根据应用下载链接的来源自行判断并下载可信任的应用程序。</p>
            <p class="newp3">•	4. 文档。如果随应用程序提供文档，则您可以复制和使用该文档，但仅供您个人参考之用。</p>
            <p class="newp2">第十二条：其他</p>
            <p class="newp3">•	1. 本服务协议、任何适用的隐私政策、补充和更新条款以及您同意的任何隐私政策，构成超级签名服务及其应用程序的完整的服务协议。</p>
            <p class="newp3">•	2. 本协议的成立、生效、履行、解释及纠纷解决，适用中华人民共和国大陆地区法律（不包括冲突法）。</p>
          </div>
        </div>
      </div>
    </div>
    <div class="login_title">
      <img src="../../../static/image/superSignature/hplogo@2x.png" alt="">

      <div class="login_title_div">
        <router-link to="/" tag="p">返回首页</router-link>
        <!--<p>关于我们</p>-->
      </div>
    </div>
    <div class="banner">
      <div class="loginDiv">
        <div class="loginDiv_One">
          <p class="msg_login">注册</p>
        </div>
        <div v-show="xianshi"
             style="width:100%;display:flex;align-items:center;position: absolute;padding-left: 20px;font-size: 13px;color: red;margin-top: 0.5vw">
          <img src="../../../static/image/login/tishi.png" alt="">
          <p class="tishiXinxi" style="padding-left: 10px"></p>
        </div>
        <div class="msgDiv">
          <div class="login_Input">
            <div class="phone_div" :class="{'borderColor':phoneNumberIcon}">
              <div class="img_div">
                <img v-if="phoneNumberIcon" src="../../../static/image/login/shouji_s.png" alt="">
                <img v-else src="../../../static/image/login/shouji.png" alt="">
              </div>
              <input v-on:input="phoneNumberInput" type="text" placeholder="请输入手机号码" v-model="phoneNumber"
                     onkeyup="this.value=this.value.replace(/\D/g,'')"
                     onafterpaste="this.value=this.value.replace(/\D/g,'')">
            </div>
            <div class="verification_div" :class="{'borderColor':verificationNumberIcon}">
              <div class="img_div">
                <img v-if="verificationNumberIcon" src="../../../static/image/login/yanzheng_s.png" alt="">
                <img v-else src="../../../static/image/login/yanzhengma.png" alt="">
              </div>
              <input v-on:input="verificationNumberInput" type="text" placeholder="请输入短信验证码"
                     v-model="verificationNumber">
              <div v-if="daojiFlag2" @click="send" class="send ">{{yanMsg}}</div>
              <div v-else class="daojishi3" >{{countDown}}</div>
            </div>
            <div class="set_div" :class="{'borderColor':setPasswordIcon}">
              <div class="img_div">
                <img v-if="setPasswordIcon" src="../../../static/image/register/mima_s.png" alt="">
                <img v-else src="../../../static/image/register/mima_n.png" alt="">
              </div>
              <input v-on:input="setPasswordInput" type="password" placeholder="设置6至20位登录密码" v-model="setPassword" >
            </div>
          </div>
          <div class="login_state">
            <div class="login_state_div">
              <div class="login_state_small">
                <img @click="checklist" v-if="isCheck" src="../../../static/image/login/gouxuan1.png" alt="">
                <img v-else @click="noChecklist" src="../../../static/image/login/hpxuan.png" alt="">
                <p>勾选同意</p>
              </div>
              <p class="agreement" style="color:#57a3f3;cursor: pointer" @click="yonghu">《用户服务协议》</p>
            </div>
          </div>
          <div class="loginBtn" @click="registerBtn">
            <div>
              <p>注册</p>
            </div>
          </div>
          <div class="login_footer">
            <p>已有账号，<span @click="login">直接登录</span></p>
          </div>
        </div>


      </div>
    </div>
    <Bfooter></Bfooter>
  </div>
</template>

<script>
  import {BASE_URL} from "../../api";
  import Bfooter from '../component/footer'
  import axios from 'axios'
  import qs from 'qs'

  export default {
    name: "register",
    data() {
      return {
        wangzhi:'',
        isyonghu:false,
        userName: '',//用户名称
        phoneNumber: '',//手机号码
        verificationNumber: '',//验证码
        setPassword: '',//密码
        userNameIcon: false,
        phoneNumberIcon: false,
        verificationNumberIcon: false,
        setPasswordIcon: false,

        isState: true,
        isCheck: true,
        isA: true,
        isB: false,
        xianshi: false,
        daojiFlag2:true,
        yanMsg:"发送验证码",
        countDown:''
      }
    },
    components: {
      Bfooter
    },
    methods: {
      yonghu(){
        this.isyonghu=true
      },
      chachanew(){
        this.isyonghu=false
      },
      /*用户输入框聚焦事件*/
      // userNameInput() {
      //   this.xianshi = false
      //   if (this.userName == '') {
      //     this.userNameIcon = false
      //   } else {
      //     this.userNameIcon = true
      //   }
      // },
      /*手机号码输入框聚焦事件*/
      phoneNumberInput() {
        this.xianshi = false
        if (this.phoneNumber == '') {
          this.phoneNumberIcon = false
        } else {
          this.phoneNumberIcon = true
        }
      },
      /*验证码输入框聚焦事件*/
      verificationNumberInput() {
        this.xianshi = false
        if (this.verificationNumber == '') {
          this.verificationNumberIcon = false
        } else {
          this.verificationNumberIcon = true
        }
      },
      /*密码输入框聚焦事件*/
      setPasswordInput() {
        this.xianshi = false
        if (this.setPassword == '') {
          this.setPasswordIcon = false
        } else {
          this.setPasswordIcon = true
        }
      },
      /*发送验证码倒计时*/
      send() {
        if(this.phoneNumber!=''){
          var timeClock3;
          var timer_num = 60;
          var that=this

          timeClock3 = setInterval(function () {
            timer_num--;
            that.daojiFlag2=false
            that.countDown=timer_num+'秒'
            if (timer_num == 0) {
              clearInterval(timeClock3);
              that.daojiFlag2=true
              that.yanMsg='重新发送'
            }
          }, 1000)
          let data = {
            mobile: this.phoneNumber,
            event: 'register'
          }

          axios.post(BASE_URL+'/api/sms/send', qs.stringify(data)).then(res => {
            console.log(res)
            if (res.data.msg == '已被注册') {
              this.xianshi = true
              $(".tishiXinxi").html('手机号码已经被注册')
            }
            if(timer_num == 0){
              clearInterval(timeClock3);
            }
          }, err => {
            console.log(err)
          })
        }
      },
      checklist() {
        this.isCheck = false
        //alert("勾选了")
      },
      noChecklist() {
        this.isCheck = true
       // alert("取消勾选了")
      },
      registerBtn() {
        if(this.isCheck==true){
          this.xianshi = true
          $(".tishiXinxi").html('请勾选用户服务协议')
        }else{
          let f = {
            mobile: this.phoneNumber,
            captcha: this.verificationNumber,
            password: this.setPassword
          }
          let config = {
            headers: {'Content-Type': 'application/x-www-form-urlencoded'}
          };
          axios.post(BASE_URL+'/api/User/register', qs.stringify(f), config).then(res => {
            if (res.data.msg == '用户名必须4-20个字符') {
              this.xianshi = true
              $(".tishiXinxi").html('用户名必须4-20个字符')
            } else if (res.data.msg == '手机号码不能为空') {
              this.xianshi = true
              $(".tishiXinxi").html('手机号码不能为空')
            } else if (res.data.msg == '验证码不能为空') {
              this.xianshi = true
              $(".tishiXinxi").html('验证码不能为空')
            } else if (res.data.msg == '手机格式不正确') {
              this.xianshi = true
              $(".tishiXinxi").html(' 手机格式不正确')
            } else if (res.data.msg == '密码不能为空') {
              this.xianshi = true
              $(".tishiXinxi").html('密码不能为空')
            } else if (res.data.msg == '密码必须6-20个字符') {
              this.xianshi = true
              $(".tishiXinxi").html('密码必须6-20个字符')
            }else if(res.data.code==200){
              this.$Modal.success({
                title: '成功',
                content: '注册成功',
                onOk: () => {
                  this.$router.push({
                    path: '/login'
                  })
                }
              });
            }
            console.log(res.data)

          }, err => {
            console.log(err)
          })
        }


      },
      login() {
        this.$router.push({
          path: '/login'
        })
      }
    }
  }
</script>

<style scoped>
  .register {
    width: 100%;
    height: 100%;
    position: relative;
  }

  .login_title {
    width: 100%;
    height: 80px;
    display: flex;
    align-items: center;
  }

  .login_title img {
    width: 143px;
    height: 39px;
    margin-left: 18.8vw;
  }

  .login_title_div {
    display: flex;
    font-size: 16px;
    color: #999999;
    margin-left: 45vw;
  }

  .login_title_div p:nth-child(1) {
    width: 56px;
    height: 30px;
    /*background-color: #06B2B6;*/
    font-size: 14px;
    color: #999999;
    line-height: 30px;
    text-align: center;
    /*border-radius: 5px;*/
    cursor: pointer;
  }

  .login_title_div p:nth-child(2) {
    margin-left: 20px;
    width: 56px;
    height: 30px;
    /*background-color: white;*/
    font-size: 14px;
    color: #999999;
    line-height: 30px;
    text-align: center;
    /*border-radius: 5px;*/
    cursor: pointer;
  }

  .banner {
    width: 100%;
    max-width: 1468px;
    height: 750px;
    background-image: url('../../../static/image/login/hpdenglu_bg.png');
    background-size: 100% 100%;
    background-repeat: no-repeat;
    display: flex;
    align-items: center;
    position: relative;
    margin: 0 auto;
  }

  .loginDiv {
    width: 334px;
    height: 460px;
    position: absolute;
    right: 15%;
    background-image: url('../../../static/image/login/denglukuang.png');
    background-size: 100% 100%;
    background-repeat: no-repeat;
    background:rgba(255,255,255,1);
    box-shadow:0px 0px 18px 0px rgba(5,151,248,0.2);
    border-radius:10px;
  }

  .loginDiv_One div {
    height: 15px;
    border: 1px solid #DCDCDC;
  }

  .login_Input {
    width: 100%;
    display: flex;
    justify-content: center;
    flex-flow: column;
    margin-top: 30px;
  }

  .user_div {
    width: 90%;
    height: 2.5vw;
    display: flex;
    align-items: center;
    margin: 0 auto;
    border: 1px solid #DCDCDC;
    border-radius: 8px;
    box-sizing: content-box;

  }

  .img_div {
    width: 30px;
    height: 23px;
    display: flex;
    justify-content: center;
    margin-left: 10px;
  }

  .user_div img {
    width: 20px;
    height: 22px;
  }

  .user_div input {
    width: 90%;
    height: 2.5vw;
    border: 0;
    font-size: 1vw;
    padding-left: 20px;
    border-radius: 8px;
    outline: none;
  }

  .phone_div {
    width: 300px;
    height: 40px;
    display: flex;
    align-items: center;
    margin: 15px auto 0 auto;
    border: 1px solid #DCDCDC;
    border-radius: 8px;
    box-sizing: content-box;
  }

  .phone_div img {
    width: 15px;
    height: 23px;

  }

  .phone_div input {
    width: 90%;
    height: 40px;
    border: 0;
    font-size: 1vw;
    padding-left: 20px;
    border-radius: 8px;
    outline: none;
  }

  .verification_div {
    width: 300px;
    height: 40px;
    display: flex;
    align-items: center;
    margin: 15px auto 0 auto;
    border: 1px solid #DCDCDC;
    border-radius: 8px;
    box-sizing: content-box;

  }

  .verification_div img {
    width: 18px;
    height: 22px;
  }

  .verification_div input {
    width: 50%;
    height: 40px;
    border: 0;
    font-size: 15px;
    padding-left: 20px;
    border-radius: 8px;
    outline: none;
  }

  .set_div {
    width: 300px;
    height: 40px;
    display: flex;
    align-items: center;
    margin: 15px auto 0 auto;
    border: 1px solid #DCDCDC;
    border-radius: 8px;
    box-sizing: content-box;
  }

  .set_div img {
    width: 19px;
    height: 22px;
  }

  .set_div input {
    width: 90%;
    height: 40px;
    border: 0;
    font-size: 1vw;
    padding-left: 20px;
    border-radius: 8px;
    outline: none;
  }

  input::-webkit-input-placeholder {
    color: #999999;
    font-size: 15px;
  }

  input:-webkit-autofill {
    -webkit-box-shadow: 0 0 0px 1000px white inset;
  }

  .send, .daojishi3 {
    width: 100px;
    height: 26px;
    line-height: 26px;
    text-align: center;
    color: #333333;
    font-size: 15px;
    margin-left: 20px;
    cursor: pointer;
    font-family: "MicrosoftYaHei";

    border-left: 1px solid #E5E5E5;
  }

  .login_state {
    width: 100%;
    margin-top: 26px;
    font-size: 15px;
  }

  .login_state_div {
    width: 90%;
    margin: 0 auto;
    display: flex;

  }

  .login_state_small p {
    margin-left: 0.8vw;
    color: #999999;
    font-family: 'MicrosoftYaHei';
  }

  .login_state_div img {
    width: 19px;
    height: 19px;
    margin-left: 0.5vw;
  }

  .login_state_small {
    display: flex;
  }

  .agreement {
    color: #333333;
  }

  .loginBtn {
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: center;
    margin-top: 20px;
    cursor: pointer;
  }

  .loginBtn div {
    width: 300px;
    height: 50px;
    background-image: url('../../../static/image/login/hpanniu.png');
    background-size: 100% 50px;
    background-repeat: no-repeat;
    text-align: center;
    line-height: 50px;
    color: white;
    font-size: 18px;
  }

  .login_footer {
    width: 100%;
    display: flex;
    justify-content: center;
    font-size: 0.8vw;
    margin-top: 20px;
    cursor: pointer;
  }

  .login_footer span {
    color: #278DFE;
  }

  .isColor {
    color: #278DFE;

  }

  .borderColor {
    border: 1px solid #278DFE;
  }
  .loginDiv_One {
    width: 100%;
    height: 60px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-size: 17px;

    border-bottom: 1px solid #DCDCDC;
  }
  .mask {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    background: rgba(2, 2, 2, 0.5);
    z-index: 1000000;
    top: 0;
  }
  .maskDiv{
    width: 750px;
    height: 736px;
    background-color: white;
    border-radius: 10px;
    position: relative;
  }
  .chachanew{
    width: 15px;
    height: 15px;
    position: absolute;
    right: 15px;
    top: 15px;
    cursor: pointer;
  }
  .maskDivText{
    width: 95%;
    margin: 0 auto;
  }
  .maskDivTextP{
    font-size: 16px;
    color: #333;
    text-align: center;
    margin-top: 20px;
    font-weight: bold;
  }
  .newp1{
    color: #7b7f83;
    font-size: 12px;
    text-align: justify;
    margin-top: 5px;
    line-height: 25px;
  }
  .newp2{
    color: #333333;
    font-size: 12px;
    text-align: justify;
    margin-top: 5px;
    font-weight: bold;
    line-height: 25px;
  }
  .newp3{
    color: #7b7f83;
    font-size: 12px;
    text-align: justify;
    margin-top: 5px;
    text-indent:2em;
    line-height: 25px;
  }
  .maskDivTextSmall{
    width: 100%;
    height:570px;
    overflow-y: auto;
  }
  .maskDivTextSmall::-webkit-scrollbar{
    width:10px;
    height:10px;
    margin-left: 10px;
    padding-left: 10px;
    /**/
  }
  .maskDivTextSmall::-webkit-scrollbar-track{
    background: rgb(255, 255, 255);
    border-radius:2px;
    margin-left: 10px;
    padding-left: 10px;
  }
  .maskDivTextSmall::-webkit-scrollbar-thumb{
    background: #bfbfbf;
    border-radius:10px;
    margin-left: 10px;
    padding-left: 10px;
  }
  .maskDivTextSmall::-webkit-scrollbar-thumb:hover{
    background: #333;
    margin-left: 10px;
    padding-left: 10px;
  }
  .maskDivTextSmall::-webkit-scrollbar-corner{
    background: #179a16;
    margin-left: 10px;
    padding-left: 10px;
  }
</style>
