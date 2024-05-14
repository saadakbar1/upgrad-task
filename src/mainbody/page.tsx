import React from 'react';

const MainBody = () => {
  return (
    <div className="container mx-auto mr-30 py-40">
      <h1 className="text-justify font-bold text-4xl py-5" style={{ textAlign: 'justify' }}>What is a Supply Chain?</h1>
      <p style={{ textAlign: 'justify' }}>Apple Inc. is a name that does not need any introduction.&nbsp;When it comes to&nbsp;supply chain, Apple has consistently been ranked as No.
        1 in the world by <a target="_blank" href="https://www.gartner.com/en/newsroom/press-releases/2014-05-22-gartner-announces-rankings-of-its-2014-supply-chain-top-25">Gartner</a>.&nbsp;
        Why is it that?</p>
      <p style={{ textAlign: 'justify' }}></p>
      <p dir="ltr" style={{ textAlign: 'justify' }}>&nbsp;</p>
      <p dir="ltr" style={{ textAlign: 'justify' }}>A <strong>supply chain </strong>is a mechanism through
        which raw materials from the suppliers are first converted and then placed in the hands of the
        customers in the form of finished goods.</p>
      <p style={{ textAlign: 'justify' }}>&nbsp;</p>
      <p dir="ltr" style={{ textAlign: 'justify' }}>Let’s study the supply chain by understanding how a
        <strong>product flows</strong> from the supplier to the customer. However, it is important to
        note that if a product reaches the customer, then it means that there was a demand for it. So,
        let’s also understand how this <strong>demand information flows</strong>.</p>
      <p>As you learnt in the video above, there are two distinct types of flows within a supply chain,
        which are as follows:</p>
      <ol className='py-5'>
        <li><strong>Product flow:</strong> From manufacturer to customer</li>
        <li><strong>Demand flow: </strong>From customer to manufacturer</li>
      </ol>
      {/* Embed YouTube video player */}
     
      <p>A typical supply chain involves a variety of stakeholders. A supply chain includes all or some
        of the following stakeholders depending on the type of industry the organisation operates in:</p>
      <ul className="px-8"style={{ listStyleType: 'disc' }}>
        <li>Customers</li>
        <li>Retailers</li>
        <li>Wholesalers / Distributors</li>
        <li>Storage locations</li>
        <li>Manufacturers</li>
        <li>Vendors or suppliers</li>
      </ul>
      <p></p>
      <p dir="ltr">Now that you are aware of the mechanism of the supply chain, in the next segment, you
        will learn about Apple:&nbsp;an organisation that is touted to have the best supply chain.</p>
    </div>
  );
};

export default MainBody;
