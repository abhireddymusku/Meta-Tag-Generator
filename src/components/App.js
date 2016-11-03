import React, { Component } from 'react';

class App extends Component{

  constructor(props){
    super(props);

    this.state = { name: '' };
    this.state = { content: ''}
    this.state = { title: ''}
    this.state = { twitterCreator: ''}
    this.state = { imageURL: ''}
    this.state = { websiteURL: ''}
    this.state = {typepage: ''}

    this.state = { twitter: false, dns: false, mobileResponsive: false};
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(thing) {
    // switch
    switch (thing){
      case 'twitter':
      this.setState({
        twitter: !this.state.twitter
      });
      break;
      case 'dns':
      this.setState({
        dns: !this.state.dns
      });
      break;
      case 'mobileResponsive':
      this.setState({
        mobileResponsive: !this.state.mobileResponsive
      });
      break;

    }

  }

  render() {

    const twitterD = this.state.twitter ? '' : 'twitterD';
    const dnsD = this.state.dns ? '' : 'dnsD';
    const mobileResponsiveD = this.state.mobileResponsive ? '' : 'mobileResponsiveD';


    return (

      <div>
      <div className="container">
      <div className="row">
      <h1>The SEO Meta Tag Generator</h1>
      <div className="col-md-6">
      <form className="form">
      <div className="form-group">
      <label>Kind of Webpage</label>
      <select value={this.state.typepage}
      className="form-control" onChange={(event)=> this.setState({typepage: event.target.value})}>
      <option>Article</option>
      <option>Blog</option>
      <option>Product</option>
      <option>Person</option>
      <option>Organization</option>
      <option>LocalBusiness</option>
      </select>
      </div>
      <div className="form-group">
      <label>Website Name:</label>
      <input 
      value = {this.state.name} className="form-control"
      onChange={(event) => this.setState({name: event.target.value})} />
      </div>
      <div className="form-group">
      <label>Website URL:</label>
      <input className="form-control"
      value = {this.state.websiteURL}
      onChange={(event) => this.setState({websiteURL: event.target.value})} />
      </div>
      <div className="form-group">
      <label>Meta description:</label>
      <textarea data-limit="180" className="form-control"
      value = {this.state.content}
      onChange={(event) => this.setState({content: event.target.value})} />
      </div>
      <div className="form-group">
      <label>Website Title:</label>
      <input className="form-control"
      value = {this.state.title}
      onChange={(event) => this.setState({title: event.target.value})} />
      </div>
      <div className="form-group">
      <label>Twitter Meta Data ?</label>
      <input 
      type="checkbox" 
      checked={ this.state.twitter } 
      onChange={ this.handleChange.bind(this, 'twitter') } />
      </div>
      <div className="form-group">
      <label className={ twitterD }>Twitter username @:</label>
      <div className={ twitterD }>
      <input className="form-control"
      value = {this.state.twitterUsername}
      onChange={(event) => this.setState({twitterUsername: event.target.value})} />
      </div>
      </div>
      <div className="form-group">
      <label className={ twitterD }>Twitter Creators Content:</label>
      <div className={ twitterD }>
      <input className="form-control"
      value = {this.state.twitterCreator}
      onChange={(event) => this.setState({twitterCreator: event.target.value})} />
      </div>
      </div>
      <div className="form-group">
      <label>Website Image URL:</label>
      <input className="form-control"
      value = {this.state.imageURL}
      onChange={(event) => this.setState({imageURL: event.target.value})} />
      </div>
      <div className="form-group">

      <label>Dns Prefetch Data ?</label>
      <input 
      type="checkbox" 
      checked={ this.state.dns } 
      onChange={ this.handleChange.bind(this, 'dns') } />
      <p>If you have assets on your site such as Facebook 'Like', Twitter share, or other social media buttons that use JavaScript to load from their server, you can use this DNS fetch for better loading times.</p>
      </div>

      <div className="form-group">

      <label> Mobile Responsive ? </label>
      <input 
      type="checkbox"
      checked={this.state.mobileResponsive}
      onChange={ this.handleChange.bind(this, 'mobileResponsive') } />
      <p>Is your site responsive? You'll need this so the viewport matches that of smaller devices. Otherwise, all of your awesome responsive CSS you wrote won't work the way it's supposed to!</p>
      </div>
      </form>
      </div>

      <div className="col-md-6">
      &#60;&#33;-- Add to HTML tag --&#62;
      <br/>
      &#60;html itemscope itemtype="http://schema.org/{this.state.typepage}" /&#62;
      <br/>
      &#60;&#33;-- Basic Meta --&#62;
      <br/>
      &#60;meta name="name" content="{this.state.name}" /&#62;
      <br/>
      &#60;meta name="description" content="{this.state.content}" /&#62;
      <br/>
      &#60;&#33;-- Page Title --&#62;
      <br/>
      &#60;title&#62; {this.state.title} &#60;/title&#62;
      <br/>
      &#60;&#33;-- G+ Open Graph --&#62;
      <br/>
      &#60;meta property="og:title" content="{this.state.title}" /&#62;
      <br/>
      &#60;meta property="og:image" content="{this.state.imageURL}" /&#62;
      <br/>
      &#60;meta property="og:description" content="{this.state.content}" /&#62;
      <br/>
      <div className={ twitterD }>
      &#60;&#33;-- Twitter Card --&#62;
      <br/>
      &#60;meta name="twitter:url" content="{this.state.websiteURL}" /&#62;
      <br/>
      &#60;meta name="twitter:card" content="summary" /&#62;
      <br/>
      &#60;meta name="twitter:site" content="http://www.twitter.com/{this.state.twitterUsername}" /&#62;
      <br/>
      &#60;meta name="twitter:creator" content="{this.state.twitterCreator}" /&#62;
      <br/>
      &#60;meta name="twitter:title" content="{this.state.title}" /&#62;
      <br/>
      &#60;meta name="twitter:description" content="{this.state.content}" /&#62;
      <br/>
      &#60;meta name="twitter:image" content="{this.state.imageURL}" /&#62;
      <br/>
      </div>
      <div className={ dnsD }>
      &#60;&#33;-- dns-prefetch Data --&#62;
      <br/>
      &#60;link rel="dns-prefetch" href="//fonts.googleapis.com" /&#62;
      <br/>
      &#60;link rel="dns-prefetch" href="//www.google-analytics.com" /&#62;
      <br/>
      &#60;link rel="dns-prefetch" href="//platform.twitter.com" /&#62;
      <br/>
      &#60;link rel="dns-prefetch" href="//p.twitter.com" /&#62;
      <br/>
      &#60;link rel="dns-prefetch" href="//cdn.api.twitter.com" /&#62;
      <br/>
      &#60;link rel="dns-prefetch" href="//s3.amazonaws.com" /&#62;
      <br/>
      &#60;link rel="dns-prefetch" href="//graph.facebook.com" /&#62;
      <br/>
      &#60;link rel="dns-prefetch" href="//connect.facebook.net" /&#62;
      <br/>
      </div>
      <br/>
      <div className={ mobileResponsiveD } >
      &#60;&#33;-- Mobile Responsive Viewport --&#62;
      <br/>
      &#60;meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1 /&#62;
      </div>
      </div>
      </div>
      </div>
      </div>

      );

}


}


export default App;

