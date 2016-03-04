'use strict';

var fs = require('fs');
var path = require('path');
var Sql = require('sequelize');
/*var sql = new Sql(process.env.DB_LOCAL_NAME, process.env.DB_LOCAL_USER, process.env.DB_LOCAL_PASS, {
  host: process.env.DB_LOCAL_HOST,
  dialect: 'mssql',

  pool: {
    max: 5,
    min: 0,
    idle: 10000
  }
});*/
var sql = new Sql(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
  host: process.env.DB_HOST,
  dialect: 'mssql',
  pool: {
    max: 5,
    min: 0,
    idle: 10000
  },
  dialectOptions: {
    encrypt: true
  }
});

var EventTab = module.exports = sql.define('EventTab', {
  eventId: Sql.INTEGER,
  tabNumber: Sql.INTEGER,
  tabTitle: Sql.TEXT,
  tabContent: Sql.TEXT
})

/*EventTab.sync({force: true})
.then(function() {
  return EventTab.create({
    eventId: 1,
    tabNumber: 1,
    tabTitle: 'About',
    tabContent: '<a class="button orange large float-right" target="_blank" href="http://aka.ms/Pphkv8">Register</a><h3>DevDays Asia 2016 @ Taipei</h3><h4>April 19th - 21st, TAF Innovation Base</h4><p>Microsoft established the IoT Industry Development Center in October of 2015 to effectively integrate global and local partners from the ecosystem and accelerate the process of developing IoT solutions for the manufacturing, financial, health care, transportation, and retailing industries. DevDays Asia 2016 @ Taipei, directed by Industrial Development Bureau, and hosted by Microsoft and Digital Content Industry Promotion Office, will be held in April to help developers catch up with new concepts and technologies. In the three-day program, Microsoft Experienced Developers from the US will deliver lectures, host workshops, and communicate, interact, and co-create with participants to generate amazing ideas as well as solutions.</p><p>On the first day, keynote speeches about new concepts and technologies for enhancing productivity, cloud computing, and data analysis platform will be delivered by Microsoft Experienced Developers from the US. The speakers will focus on the technologies for boosting productivity and cloud & data platform.</p><p>In the Morning session of the second day, Microsoft Experienced Developers from the US will provide sample codes and share their tips and guidelines about application development. A HAOkathon ( Hackathon + A for Analytical + O for Open ) focusing on improving Social Good will be held in the afternoon of the second day. Contestants will get the chance to utilize latest technologies to promote social welfare with Microsoft Experienced Developers from the US.</p><p>For the remaining day and a half, Microsoft Experienced Developers from the US will help contestants implement their ideas and generate improved solutions. Aligning with the theme of promoting social welfare, contestants can choose a wide variety of topics, such as Hack for Enhancing Productivity, Hack for the Environment and Marine Eco-system, Hack for the Good, Hack for Government Open Data, Hack for University Education, etc. By better utilizing technologies, it is possible to bring good deeds to a whole new level. Generous prizes will be awarded for the contestants of Hackathon, including a Surface Pro 4, a one-year subscription to Visual Studio Enterprise with MSDN, and a one-year subscription to Office 365. </p><p>Don’t hesitate! Reserve seats with your team members to DevDays Asia 2016 @ Taipei!</p><h5>Information</h5><ul><li>Date: 19th-21st April (Tue - Thu)</li><li>Event Plan:<ul type="square"><li>Day 1 Morning: Keynote</li><li>Day 1 Afternoon + Day 2 Morning: Tracks + Workshops</li><li>Day 2 Afternoon + Day 3: HAOkathon (Hackathon)</li></ul></li><li>Contact：02-25622880 # 3671 Mr.Dai</li><li><a href="https://www.microsoft.com/taiwan/events/devdays/">DevDay Asia 2016 @Taipei 亞太開發人員技術年會 - 生產力暨物聯網應用開發元年</a></li></ul><br /><br />'
  })
})
.then(function() {
  return EventTab.create({
    eventId: 1,
    tabNumber: 2,
    tabTitle: 'Agenda',
    tabContent: '<a class="button orange large float-right" target="_blank" href="http://aka.ms/Pphkv8">Register</a><h3>Coming Soon!</h3><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />'
  })
})
.then(function() {
  return EventTab.create({
    eventId: 1,
    tabNumber: 3,
    tabTitle: 'Venue',
    tabContent: '<a class="button orange large float-right" target="_blank" href="http://aka.ms/Pphkv8">Register</a><h4>Venue: TAF<h4><h5>(No.177, Sec. 1, Jianguo S. Rd., Da’an Dist., Taipei City 106, Taiwan (R.O.C.))</h5><img src="../uploads/taipei-dev-days-2016-map.png" />'
  })
})
.then(function() {
  return EventTab.create({
    eventId: 1,
    tabNumber: 4,
    tabTitle: 'HAOkathon',
    tabContent: '<a class="button orange large float-right" target="_blank" href="http://aka.ms/Pphkv8">Register</a><h2>HAOkathon ( Hackathon + A for Analytical + O for Open )</h2><ul class="tabs left"><li class="current"><a href="#taipei2016IntroTab"><span style="font-size: 1.5em">Introduction</span></a></li><li><a href="#taipei2016TopicsTab"><span style="font-size: 1.5em">Topics</span></a></li><li><a href="#taipei2016RegistrationNotes"><span style="font-size: 1.5em">Notes on registration</span></a></li><li><a href="#taipei2016Agenda"><span style="font-size: 1.5em">Agenda</span></a></li><li><a href="#taipei2016Awards"><span style="font-size: 1.5em">Awards</span></a></li><li><a href="#taipei2016Regulation"><span style="font-size: 1.5em">Regulation</span></a></li><li><a href="#taipei2016Reference"><span style="font-size: 1.5em">Reference</span></a></li></ul><div id="taipei2016IntroTab" class="tab-content eventTabDiv" style="display:block;"><h3>Introduction</h3><p>This will be a golden opportunity for contestants of the Hackathon. During the remaining day and a half, Microsoft Experienced Developers from the US will help contestants implement their ideas and hopefully generate improved solutions. Aligning with the theme of promoting social welfare, contestants can choose a wide variety of topics, such as Hack for Enhancing Productivity, Hack for the Environment and Marine Eco-system, Hack for the Good, Hack for Government Open Data, Hack for University Education, etc. By better utilizing technologies, it is possible to bring good deeds to a whole new level. Generous prizes will be awarded for the contestants of the Hackathon, including a Surface Pro 4, a one-year subscription to Visual Studio Enterprise with MSDN, a one-year subscription to Azure Pass and Office 365.</p><ul><li>Time: From afternoon of April 20<sup>th</sup> to the morning of April 21<sup>st</sup></li><li>Group: <span style="color:#0070c0">Productivity APP</span> and <span style="color:#0070c0">Cloud & Data Platform APP</span>. Each team is to be composed of 4 members; a total of 80 teams is expected.<li>Ranking and its criteria: See table below for ranking and its criteria. There will be 5 teams from each group ranked for the finals. Each of them will exhibit their outcomes and make a 5 minute presentation to the review panel. Each group will generate 3 winning teams, respectively. See below for the awards for individual teams at different places.<ul style="list-style-type:none;"><li><table class="striped tight" style="width:50%" cellspacing="0" cellpadding="0"><thead><tr><th>Ranking Criteria</th><th>Weight</th></tr></thead><tr><td>Impact</td><td>50%</td></tr><tr><td>Concept</td><td>15%</td><tr><td>Execution</td><td>20%</td></tr><tr><td>Feasibility</td><td>15%</td></tr></table></ul></li></ul></div><div id="taipei2016TopicsTab" class="tab-content eventTabDiv" style="display:none;"><h3>Topics</h3><ul><li>Theme:  Generate a better solution to enhance social welfare</li><li>App Groups: Productivity APP or Cloud and Data Platform APP</li><li>Topics:<ul type="square"><li>Hack for Enhancing Productivity</li><li>Hack for the Environment and Marine Eco-system</li><li>Hack for the Good</li><li>Hack for Government Open Data</li><li>Hack for University Education</li></ul></ul></div><div id="taipei2016RegistrationNotes" class="tab-content eventTabDiv" style="display:none;"><h3>Notes on registration</h3><ul type="square"><li>You are welcome to this race if you are interested in the latest technology and able to form a development team of 4 members. At least one in your team must be equipped with development skills in Office 365 Add-ons or Azure Data Platform (e.g. SQL, ML and Cortana Analytics Suite).</li><li>Please register online with <strong>DevDays Asia 2016 @ Taipei</strong> as an individual contestant and form a team in advance or by recruiting team members on the scene. Register your team at the <strong>DevDays Asia 2016 @ Taipei</strong> Info Desk by filling in the required HAOckathon registration form by April 19th. You need to have a team leader to be your contest affairs liaison. You may change which group you want to race with before the HAOckathon gets started officially on the 20th of April.</li><li>Works for the contest may be shaped and planned for development beforehand, but no code, product, or work available in the market nor the submissions that won or was submitted to any other race will be allowed, except Imagine Cup, AIT Fish Hackathon, BizSpark.</li><li>You may take a rest by napping on the table or in your own sleeping bag at the refreshment zone during the development session of the contest. </li><li>There will be development experts from America who will work with you. You are more than welcome to discuss and review your experiences with them.</li><li>Organizers reserve the right to review your qualifications.</li></ul></div><div id="taipei2016Agenda" class="tab-content eventTabDiv" style="display:none;"><h3>Coming Soon!</h3></div><div id="taipei2016Awards" class="tab-content eventTabDiv" style="display:none;"><h3><h3>Awards</h3>  <table class="striped" cellspacing="0" cellpadding="0"><thead><tr><th>&nbsp;</th><th>Productivity APP</th><th>Cloud & Data Platform APP</th></tr></thead><tbody><tr><th><strong>1st place</strong><p>Two teams, one for each group</p></th><td><ul><li>Surface Pro 4 (worth TWD 72,888, one for each team member)</li><li>Visual Studio Enterprise with MSDN one-year subscription (worth TWD 250,000, one for each team member)</li><li>Office 365 Home one-year subscription (worth TWD 3,190, one for each team member)</li></ul></td><td><ul><li>  Surface Pro 4 (worth TWD 72,888, one for each team member)</li><li>Visual Studio Enterprise with MSDN one-year subscription (worth TWD 250,000, one for each team member)</li><li>Office 365 Home one-year subscription (worth TWD 3,190, one for each team member)</li></ul></td></tr><tr><th><strong>2nd place</strong><p>Two teams, one for each group</p></th><td><ul><li>Hardware equipment, worth about TWD 30K (one for each team member)</li><li>Office 365 Home one-year subscription (worth TWD 3,190, one for each team member)</li></ul></td><td><ul><li>Hardware equipment, worth about TWD 30K (one for each team member)</li><li>Office 365 Home one-year subscription (worth TWD 3,190, one for each team member)</li></ul></td></tr><tr><th><strong>3rd place</strong><p>Two teams, one for each group</p></th><td><ul><li>Hardware equipment, worth about TWD 10K (one for each team member)</li><li>Office 365 Home one-year subscription (worth TWD 3,190, one for each team member)</li></ul></td><td><ul><li>Hardware equipment, worth about TWD 10K (one for each team member)</li><li>Office 365 Home one-year subscription (worth TWD 3,190, one for each team member)</li></ul></td></tr></tbody></table><p>* The organizer shall reserve the rights to change awards without any advance notice</p></h3></div><div id="taipei2016Regulation" class="tab-content eventTabDiv" style="display:none;"><ol><li>Contestants are required to go through the entire race to get the participation award provided by the sponsor. </li><li>Award winner is responsible for any tax subject to the relevant tax laws. The race organizer shall be in no case held liable to any tax levied due to the award. The award winner consents that the race organizer’s withholding or pay the relevant taxes (if any). For more information on tax regulations, please visit the eTax Portal at <a href="http://www.etax.nat.gov.tw">http://www.etax.nat.gov.tw</a>.</li><li>Award winners have no right to exchange their awards for cash or other forms. Race sponsors shall not give any extra awards (either goods or cash) in case the previous one is lost, stolen, or damaged. </li><li>Race organizers reserve the rights to take care of any awards left un-awarded and replace the said awards with other goods with equivalent values without any notice in advance. </li><li>Data submitted by contestants must be true and correct without any forgery or alterations. Contestants shall not provide personal data to any third party in lieu of their own by means of fraud or theft. Contestants shall have no violations against the law.</li><li>The review panel has the final say on the finalists and winners at each stage of this race. </li><li>Race organizers, sponsors and its execution agents have the rights in reproducing, editing, converting, distributing, publicly transmitting, publicly performing, publicly presenting, publicly broadcasting, publicly verbal disclosing, referencing, or excerpting, and any other act required for using contest works by and basic data of contestants, including but not limited to name, portraits and photos, (hereafter referred to as “contest data”) unlimited number of times in their worldwide marketing activities, promotional activities, charity activities, and relevant media including publications, information, proposals, promotional materials, brochures and websites. </li><li>In case contestants took actions against measures of this race (including notes on the contests), regulations, the race itself or its website, actions aimed at interrupting this race or interfering with other contestants or participating this race in illegal activities or against the public order and good morals and manner including unfair, deceptive and fraudulent practices, subject to the organizer’s judgment, he/she agrees to the organizer’s immediate removal of his/her race or award winning qualifications (including recovering the award cash, certificate and trophy by the race organizer). He/she shall be held liable for any legal responsibility and held liable for compensating the organizer, sponsor, execution agent and their executives, directors, supervisors and employees for any of their loss and expenses due to these damages. </li><li>The contestants have learnt that any one of them or any individual attempting to compromise the web site or the progress of this race would breach relevant civil or criminal laws. The organizer, sponsors and their execution agents shall reserve the right in requesting for compensation, to the extent permitted by the relevant regulations, against damage by these individuals.</li><li>The organizer shall reserve the right to change the program of this race with a notice in advance. Race attendees, once participating in or registering to it, shall consent to be bound by this program. Any matter not covered herein shall be supplemented and publicized on the web site of this race by the organizer.</li></ol></div><div id="taipei2016Reference" class="tab-content eventTabDiv" style="display:none;"><ul type="square"><li>Cloud Tools_Azure<ol><li>Visual Studio free download  <a href="https://www.visualstudio.com">https://www.visualstudio.com</a> </li><li>Azure portal <a href="http://portal.azure.com">http://portal.azure.com</a>  </li><li>Azure Documentation  <a href="http://azure.Microsoft.com">http://azure.Microsoft.com</a>  </li><li>Open Data On Azure <a href="https://ossonazure.bhuntr.com/api.php">https://ossonazure.bhuntr.com/api.php</a> </li></ol></li><li>Microsoft Project Oxford (Image recognition and Speech recognition API) <a href="https://www.projectoxford.ai/doc">https://www.projectoxford.ai/doc</a> Office API <a href="http://dev.office.com">http://dev.office.com</a> </li><li>Office API http://dev.office.com</li><li>Azure Web App Deployment<ul style="list-style-type:none;"><li><a href="http://blogs.msdn.com/b/microsoft_student_partners_in_taiwan/archive/2016/01/13/azure-amp-visual-studio-2015-web.aspx">http://blogs.msdn.com/b/microsoft_student_partners_in_taiwan/archive/2016/01/13/azure-amp-visual-studio-2015-web.aspx</a></li></ul></li><li>Open Source PHP:<ol><li>Build PHP-MySQL Web application with Azure<ul style="list-style-type:none;"><li><a href="http://blogs.msdn.com/b/microsoft_student_partners_in_taiwan/archive/2016/02/19/azurer-php-mysql-web.aspx">http://blogs.msdn.com/b/microsoft_student_partners_in_taiwan/archive/2016/02/19/azurer-php-mysql-web.aspx</a></li></ul><li>Build PHP website with Azure<ul style="list-style-type:none;"><li><a href="http://blogs.msdn.com/b/microsoft_student_partners_in_taiwan/archive/2016/01/13/azure-visual-studio-php.aspx">http://blogs.msdn.com/b/microsoft_student_partners_in_taiwan/archive/2016/01/13/azure-visual-studio-php.aspx</a></li></ul></ol></li><li>Cross-platform Development：<ol><li>Build Cross-platform Azure App Service with Xamarin<ul style="list-style-type:none;"><li><a href="http://blogs.msdn.com/b/microsoft_student_partners_in_taiwan/archive/2016/01/22/xamarin-azure-app-service.aspx">http://blogs.msdn.com/b/microsoft_student_partners_in_taiwan/archive/2016/01/22/xamarin-azure-app-service.aspx</a></li></ul></li></ol></li><li>Use Azure for IoT<ul style="list-style-type:none;"><li><a href="https://azure.microsoft.com/en-us/develop/iot/">https://azure.microsoft.com/en-us/develop/iot/</a> </li></ul></li><li>Virtual Machine:<ol><li>Build up Linux Virtual Machine by Azure<ul style="list-style-type:none;"><li><a href="http://blogs.msdn.com/b/microsoft_student_partners_in_taiwan/archive/2016/02/19/azure-vm.aspx">http://blogs.msdn.com/b/microsoft_student_partners_in_taiwan/archive/2016/02/19/azure-vm.aspx</a></li></ul></ol></li><li>IoT & Machine Learning demo : <a href="https://channel9.msdn.com/Series/mini-Connect-2016/youbike">https://channel9.msdn.com/Series/mini-Connect-2016/youbike</a> </li><li>Client: UWP : <a href="http://blogs.msdn.com/b/hermanwu/archive/2015/08/03/windows-10-uwa-uwp-app.aspx">http://blogs.msdn.com/b/hermanwu/archive/2015/08/03/windows-10-uwa-uwp-app.aspx</a></li><li>SQL Database : <a href="https://azure.microsoft.com/zh-tw/documentation/services/sql-database/">https://azure.microsoft.com/zh-tw/documentation/services/sql-database/</a> </li><li>Develop support<ol><li>.NET : <a href="http://azure.microsoft.com/zh-tw/develop/net/">http://azure.microsoft.com/zh-tw/develop/net/</a></li><li>R: <a hreg="https://azure.microsoft.com/zh-tw/documentation/articles/machine-learning-r-quickstart/">https://azure.microsoft.com/zh-tw/documentation/articles/machine-learning-r-quickstart/</a> </li><li>PHP : <a href="https://azure.microsoft.com/zh-tw/develop/php/">https://azure.microsoft.com/zh-tw/develop/php/</a> </li><li>JAVA : <a href="http://azure.microsoft.com/zh-tw/develop/java/">http://azure.microsoft.com/zh-tw/develop/java/</a> </li><li>Node.js : <a href="http://azure.microsoft.com/zh-tw/develop/nodejs/">http://azure.microsoft.com/zh-tw/develop/nodejs/</a> </li><li>IOS , Android , Windows : http://azure.microsoft.com/zh-tw/develop/mobile/ </li></ol></li><li>Microsoft Azure documentation : <a href="http://azure.microsoft.com/zh-tw/documentation/">http://azure.microsoft.com/zh-tw/documentation/</a> </li><li>Azure Website: <a href="http://azure.microsoft.com/zh-tw/">http://azure.microsoft.com/zh-tw/</a> </li><li>MSDN : <a href="http://social.msdn.microsoft.com/Forums/zh-tw/home?category=windowsazuretw">http://social.msdn.microsoft.com/Forums/zh-tw/home?category=windowsazuretw</a> </li><li>Microsoft Azure Taiwan User Group : <a href="https://www.facebook.com/groups/AzureTWUG/">https://www.facebook.com/groups/AzureTWUG/</a></li><li>MVA (Microsoft Virtual Academy) : <a href="http://www.microsoftvirtualacademy.com/">http://www.microsoftvirtualacademy.com/</a></li></ul></div>'
  })
})
.then(function() {
  return EventTab.create({
    eventId: 2,
    tabNumber: 1,
    tabTitle: 'About',
    tabContent: '<a class="button orange large float-right" href="mailto:plugfests@microsoft.com?subject=I’m interested in Extend 2016">Register</a><h2>Extend Conference</h2><h4 class="center">Paris, France - May 11 - 12, 2016</h4><p>Microsoft Office and Data Platform Interoperability teams are pleased to announce Extend in Paris from May 11-12, 2016. Microsoft will present its latest updates about Office, Machine Learning, Cortana Analytics Suite, Power BI, and SQL Server. Microsoft will decide topics beforehand but let the public choose the context of the content. Microsoft and event startup, La Reserve,  let attendees choose the content for an, "experience similar to what one might call crowd conferencing; a participative conference of a new kind where the public is the key player" (Julien Kerihuel, La Reserve founder).</p><p>Attendees can look forward to presentations from subject matter experts, interactive developer sessions and one-on-one collaborations with Microsoft engineers. Extend 2016 will include evening mixers and social hour with other attendees and Microsoft engineers.</p><h5>Where: Paris, France</h5><h5>When: May 11 - 12, 2016</h5><h5>Who: Developers building solutions that leverage Office, SharePoint, and SQL</h5><h5>Registration: Contact <a href="mailto:plugfests@microsoft.com">plugfests@microsoft.com</a> for eligibility</h5><h5>Cost: Free</h5><br />'
  })
})
.then(function() {
  return EventTab.create({
    eventId: 2,
    tabNumber: 1,
    tabTitle: 'Videos',
    tabContent: '<iframe width="560" height="315" src="https://www.youtube.com/embed/LIQb5B8BSpo" frameborder="0" allowfullscreen></iframe>'
  })
})
.then(function() {
  return EventTab.create({
    eventId: 3,
    tabNumber:1, 
    tabTitle: 'Redmond Protocol Plugfest ',
    tabContent: '<a class="button orange large float-right" target="_blank" href="http://aka.ms/Nma3yz">Register</a><h4>Redmond Protocol Plugfest</h4><p>A 5-day Microsoft event centered around Open Specifications, interoperability, and Extensibility. Attendees will learn more about interoperability within Microsoft Office, Exchange, SharePoint, Windows and SQL Server. Attendees have the opportunity to utilize Office testing tools during the Plugfest. SQL will not be testing during the Plugfest and Windows protocol testing will be available the following week at the Windows Interoperability (IO) Lab.</p><p><b>When:</b>  June 13 - 17, 2016</p><p><b>Where:</b> Microsoft headquarters in Redmond, Washington </p><p><b>Who:</b> Developers building solutions that leverage Office, Exchange, SharePoint, Windows, or SQL</p><p><b>Cost:</b> Free</p><ul class="tabs left"><li class="current"><a href="#redmond2016WindowsAgenda"><span style="font-size: 1.5em">Agenda</span></a></li><li><a href="#redmond2016WindowsTechnologies"><span style="font-size: 1.5em">Technologies</span></a></li></ul><div id="redmond2016WindowsAgenda" class="tab-content eventTabDiv" style="display:block;"><h3>Coming Soon</h3><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /></div><div id="redmond2016WindowsTechnologies" class="tab-content eventTabDiv" style="display:none;"><ul><li>What\'s New in Office</li><li>Open Specifications + Interoperability</li><li>Protocol Test Suites</li><li>Mail Sim</li><li>Microsoft Big Data</li><li>Office Parsers</li><li>Microsoft Cloud Foundations</li><li>OData</li><li>Exchange</li><li>SharePoint</li><li>File Formats</li><li>Mail, Calendar + Contacts</li><li>WOPI</li><li>HyperV SMB3 Storage</li></ul></div></div>'
  })
})
.then(function() {
  return EventTab.create({
    eventId: 3,
    tabNumber:2, 
    tabTitle: 'Windows Interoperability (IO) Lab',
    tabContent: '<a class="button orange large float-right" target="_blank" href="http://aka.ms/Nma3yz">Register</a><h4>Windows Interoperability (IO) Lab </h4><p>The Windows Interoperability (IO) Lab is the opportunity to test your implementation with Microsoft Windows protocol test suites.   During the IO lab you have the opportunity to directly engage with Windows Protocol Support, Test Suite Development, and Windows development team as well as network with other professionals from all over the world.</p><p><b>When:</b>  June 20-24, 2016</p><p><b>Where:</b> Microsoft headquarters in Redmond, Washington </p><p><b>Who:</b> File sharing (SMB 2&3), Authentication and AD protocol implementers</p><p><b>Cost:</b> Free</p><ul class="tabs left"><li class="current"><a href="#redmond2016Agenda"><span style="font-size: 1.5em">Agenda</span></a></li><li><a href="#redmond2016Technologies"><span style="font-size: 1.5em">Technologies</span></a></li></ul><div id="redmond2016Agenda" class="tab-content eventTabDiv" style="display:block;"><h3>Coming Soon</h3><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /></div><div id="redmond2016Technologies" class="tab-content eventTabDiv" style="display:none;"><ul><li>Server Message Block (SMB2&3)</li><li>Remote Shared Virtual Disk (RSVD)</li><li>Active Directory (ADOD) and Identity</li><li>Authentication (AUTHSOD and PAC/Kile)</li><li>Bring Your Own Device (BYOD)</li><li>Authorization (AZOD)</li><li>Claim-Based Access Control (CBAC)</li></ul></div></div>'
  })
})
.then(function() {
  return EventTab.create({
    eventId: 3,
    tabNumber: 3,
    tabTitle: 'Accommodations',
    tabContent: '<h2>Silver Cloud Inns & Hotels</h2><h3>How to Book Online</h3><img src="../uploads/silver-cloud-in.jpg" class="align-left" /><p>URL: <a href="http://www.silvercloud.com" targe="_blank">www.silvercloud.com</a></p><p>Destination: Pull down a tab and select <b>“Redmond”</b> </p><p>Enter: <b>Arrival/Departure</b> date; Enter: Number of Adults / Children</p><p>Click on <b>“Check for Availability”</b>, a published room type/rates will populate the page</p><p>Enter Group ID/Login: <b>RDMDPLUG</b></p><p>Enter your Password: <b>plugfest2016</b> (lower case)</p><p>Click on <b>“Login”</b> tab below, Then Click on the <b>“Check Availability”</b> tab</p><p>A new page will then populate showing<b> “Redmond Plugfest 2016”</b> Room Type/Rate </p><p>Select room type and follow instructions until done.</p><p>You may also copy and paste below link: </p><p>https://redmond.silvercloud.com/irmnet/(S(priycso41uvl2e0n2wk0fjg1))/res/resmain.aspx?hotel=7&Arrival=06%2F20%2F2016&Departure=06%2F24%2F2016&People1=1&People2=0</p><p>Note: you may prepay online by selecting a box marked “Would you like to pay for this now?”</p><ul style="list-style-type: none"><li>Call Reservation Toll Free Line at <a href="tel:8002056934"> 1.800.205.6934</a></li><li>Call the Hotel direct at <a href="tel:4257468200"> 425.746.8200</a> and mention <b>“Redmond Plugfest”</b> Group</li><li>Email your reservation request to: <a href="mailto:reservations@redmond.silvercloud.com">reservations@redmond.silvercloud.com</a> </li><li><b>Rate Validity:</b> June 13 – June 24, 2016 </li><li><b>Check-In Time:</b> 1500 hour (3:00pm - PDT) <b>Check-Out Time: 1200 hour (12:00pm – PDT)</b> </li><li><b>Cancellation Policy:</b> 24 hours at 1500 hour (3:00pm – PDT), day before arrival date.</li></ul><p style="text-align: center;"><i> We thank you for an opportunity to serve you.</i></p><hr class="alt1" /><p style="text-align: center;"><i>Silver Cloud Inn Redmond | 2122 152nd Avenue NE | Redmond | WA 98052 USA</i></p><p style="text-align: center;"><i>Reservation: 800.205.6934 |Hotel: 425.746.8200 | Fax: 425.747.2078</i></p><p style="text-align: center;"><i><a href="http://www.silvercloud.com"> www.silvercloud.com</a></i></p>'
  })
})
.then(function() {
  return EventTab.create({
    eventId: 3,
    tabNumber: 4,
    tabTitle: 'Venue',
    tabContent: '<h3>Microsoft Redmond Campus</h3><img src="../uploads/ms-campus.png" />'
  })
})*/