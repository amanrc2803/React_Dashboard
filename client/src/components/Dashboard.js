import React, {useEffect,useState} from 'react';
import PieChart from './PieChart';


 
 
const Dashboard = () => {

    const [record, setRecord] = useState([]);

   const getData = () => {
       fetch('http://localhost:3001/api/data')
           .then(response => response.json())
           .then(data => setRecord(data))
           .catch(error => console.error('Error fetching data:', error));
   };

   useEffect(() => {
      getData();
   }, []);
   const [breadcrumb, setBreadcrumb] = useState([]);

   const handleBreadcrumbClick = (item) => {
    // Your logic to handle breadcrumb click
    console.log(`Breadcrumb clicked: ${item}`);

    // Example: Update breadcrumb state
    setBreadcrumb([...breadcrumb, item]);
  };

  
    return (



       











<div className="col main pt-5 mt-3">

<nav aria-label="breadcrumb">
  <ol className="breadcrumb">
    <li className="breadcrumb-item"><button className="btn btn-link" onClick={() => handleBreadcrumbClick("Home")}>Home</button></li>
    <li className="breadcrumb-item"><button className="btn btn-link" onClick={() => handleBreadcrumbClick("Library")}>Library</button></li>
    <li className="breadcrumb-item active" aria-current="page">Data</li>
  </ol>
</nav>
<p className="lead d-none d-sm-block">Add Employee Details and Records</p>

<div className="alert alert-warning fade collapse" role="alert" id="myAlert">
  <button type="button" className="close" data-dismiss="alert" aria-label="Close">
    <span aria-hidden="true">×</span>
    <span className="sr-only">Close</span>
  </button>
  <strong>Data and Records</strong> Learn more about employee
</div>
<div className="row mb-3">
  {/* ... (unchanged code for card components) */}
</div>

<hr />

<div className="row">
  <div className="col-lg-7 col-md-6 col-sm-12">
    <h5 className="mt-3 mb-3 text-secondary">
      Check Records of Each Sector of their Intensity
    </h5>

    <div className="table-responsive" style={{ maxHeight: '400px', overflowY: 'auto'
 }}>
  <table className="table table-striped">
    <thead className="thead-light" style={{ position: 'sticky', top: 0, zIndex: 1, background: 'white' }}>
      <tr>
        <th>Sector</th>
        <th>Insight</th>
        <th>Intensity</th>
        <th>Topic</th>
        <th>Likelihood</th>
      </tr>
    </thead>
    <tbody>
      {record.map((output) => (
        <tr key={output.id}>
          <td>{output.sector}</td>
          <td>{output.insight}</td>
          <td>{output.intensity}</td>
          <td>{output.topic}</td>
          <td>{output.likelihood}</td>
          
        </tr>
      ))}
    </tbody>
  </table>
</div>
  </div>
  <div className="col-lg-5 col-md-6 col-sm-12 col-sm-offset-5">
    <h4 className="title mt-3 mb-3 text-center text-secondary">Intensity in Chart</h4>
    <div className="mb-5" style={{ height: "300px", width: "400px" }}><PieChart /> </div>
  </div>
</div>







        <button id="more"></button>
        <div>



        <div>
  <hr />
  <h2 className="sub-header mt-5">Title & Source</h2>
  <div id="cardCarousel" className="carousel slide" data-ride="carousel">
    <div className="carousel-inner">
      <div className="carousel-item active">
        <div className="mb-3">
          
            <div className="card-deck">
                {record.slice(0, 4).map((output) => (
                  <div key={output.id} className="card card-inverse card-success text-center">
                    <div className="card-body">
                      <blockquote className="card-blockquote">
                        <h3>Title</h3>
                        <p>{output.title}</p>
                        <h4>Source</h4>
                        <footer>{output.source}</footer>
                      </blockquote>
                    </div>
                  </div>
                ))}

              
          

           

            
           
              
          </div>
        </div>
      </div>
    </div>

    <a className="carousel-control-prev" href="#cardCarousel" role="button" data-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="sr-only">Previous</span>
    </a>
    <a className="carousel-control-next" href="#cardCarousel" role="button" data-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="sr-only">Next</span>
    </a>
  </div>
</div>

</div>
<button onClick={() => { window.location.href = '#flexbox'; }}>Jump to Flexbox</button>




         <button id="flexbox"></button>











        <hr />
<h2 className="mt-5">Masonry-style grid columns</h2>
<h6>with Bootstrap 4 flexbox</h6>

<div className="card-columns mb-3">
    <div className="card">
        <img className="card-img-top img-fluid" src="//placehold.it/600x200/444/fff?text=..." alt="Card cap" />
        <div className="card-body">
            <h4 className="card-title">New XL Grid Tier</h4>
            <p className="card-text">With screens getting smaller, Bootstrap 4 introduces a new grid breakpoint with the col-xl-* classes. This extra tier extends the media query range all the way down to 576 px. Even though the new XL tier would make one think it’s been added to support extra large screens, it’s actually the opposite.</p>
        </div>
    </div>
    <div className="card card-body">
        <blockquote className="card-blockquote">
            <p>Bootstrap 4 will be lighter and easier to customize.</p>
            <footer>
                <small className="text-muted">
                    Someone famous like <cite title="Source Title">Mark Otto</cite>
                </small>
            </footer>
        </blockquote>
    </div>
    <div className="card">
        <img className="card-img-top img-fluid" src="//placehold.it/600x200/bbb/fff?text=..." alt="Card cap" />
        <div className="card-body">
            <h4 className="card-title">Card title</h4>
            <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
        </div>
    </div>
    <div className="card card-body card-inverse card-primary text-center">
        <blockquote className="card-blockquote">
            <p>Create masonry or Pinterest-style card layouts in Bootstrap 4.</p>
            <footer>
                <small>
                    Someone famous in <cite title="Source Title">Bootstrap</cite>
                </small>
            </footer>
        </blockquote>
    </div>
    <div className="card card-body text-center">
        <h4 className="card-title">Clever heading</h4>
        <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
        <p className="card-text"><small className="text-muted">Last updated 5 mins ago</small></p>
    </div>
    <div className="card">
        <img className="card-img img-fluid" src="//placehold.it/600x200/777/fff?text=....jpg" alt=" " />
    </div>
    <div className="card card-body text-right">
        <blockquote className="card-blockquote">
            <p>There are also some interesting new text classes to uppercase or capitalize.</p>
            <footer>
                <small className="text-muted">
                    Someone famous in <cite title="Source Title">Bootstrap</cite>
                </small>
            </footer>
        </blockquote>
    </div>
    <div className="card card-body">
        <h4 className="card-title">Responsive</h4>
        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
    </div>
    <div className="card">
        <div className="card-body">
            <ul className="list-unstyled">
                <li className="text-capitalize"><code className="text-lowercase">text-capitalize</code> Capitalize each word</li>
                <li className="text-uppercase"><code className="text-lowercase">text-uppercase</code> Uppercase text</li>
                <li className="text-success"><code>text-success</code> Contextual colors for text</li>
                <li><code>text-muted</code> <span className="text-muted">Lighten with muted</span></li>
                <li><code>text-info</code> <span className="text-muted">Info text color</span></li>
                <li><code>text-danger</code> <span className="text-muted">Danger text color</span></li>
                <li><code>text-warning</code> <span className="text-muted">Warning text color</span></li>
                <li><code>text-primary</code> <span className="text-primary">Primary text color</span></li>
            </ul>
        </div>
    </div>
    <div className="card card-body">
        <h4 className="card-title">Heading</h4>
        <p className="card-text">So now that you've seen some of what Bootstrap 4 has to offer, are you going to give it a try?</p>
        <p className="card-text"><small className="text-muted">Last updated 12 mins ago</small></p>
    </div>
</div>

















        <button id="layouts"></button>
 <hr />
<h2 className="sub-header mt-5">Interesting layouts and elements</h2>
<div className="row mb-3">
    <div className="col-lg-6">
        <div className="card mb-3">
            <div className="card-header">
                Bye .well, .panel & .thumbnail
            </div>
            <div className="card-body">
                <h4 className="card-title">Replaced with .card</h4>
                <p className="card-text">All of these Bootstrap 3.x components have been dropped entirely for the new card component.</p>
                <button type="button" className="btn btn-secondary btn-lg">Large</button>
            </div>
        </div>
    </div>
    <div className="col-lg-6">
        <ul className="nav nav-tabs" role="tablist">
            <li className="nav-item">
                <button className="nav-link active" href="#home1" role="tab" data-toggle="tab">Home</button>
            </li>
            <li className="nav-item">
                <button className="nav-link" href="#profile1" role="tab" data-toggle="tab">Profile</button>
            </li>
            <li className="nav-item">
                <button className="nav-link" href="#messages1" role="tab" data-toggle="tab">Messages</button>
            </li>
            <li className="nav-item">
                <button className="nav-link" href="#settings1" role="tab" data-toggle="tab">Settings</button>
            </li>
        </ul>
        <div className="tab-content">
            <br />
            <div role="tabpanel" className="tab-pane active" id="home1">
                <h4>Home</h4>
                <p>
                    1. These Bootstrap 4 Tabs work basically the same as the Bootstrap 3.x tabs.
                    <br />
                    <br />
                    <button className="btn btn-primary-outline btn-lg">Wow</button>
                </p>
            </div>
            <div role="tabpanel" className="tab-pane" id="profile1">
                <h4>Pro</h4>
                <p>
                    2. Tabs are helpful to hide or collapse some additional content.
                </p>
            </div>
            <div role="tabpanel" className="tab-pane" id="messages1">
                <h4>Messages</h4>
                <p>
                    3. You can really put whatever you want into the tab pane.
                </p>
            </div>
            <div role="tabpanel" className="tab-pane" id="settings1">
                <h4>Settings</h4>
                <p>
                    4. Some of the Bootstrap 3.x components like well and panel have been dropped for the new card component.
                </p>
            </div>
        </div>
    </div>
    <div className="clearfix"></div>
    <div className="col-lg-6">
        <div className="card card-default card-body">
            <ul id="tabsJustified" className="nav nav-tabs nav-justified">
                <li className="nav-item">
                    <button className="nav-link" href="" data-target="#tab1" data-toggle="tab">List</button>
                </li>
                <li className="nav-item">
                    <button className="nav-link active" href="" data-target="#tab2" data-toggle="tab">Profile</button>
                </li>
                <li className="nav-item">
                    <button className="nav-link" href="" data-target="#tab3" data-toggle="tab">More</button>
                </li>
            </ul>
            <br />
            <div id="tabsJustifiedContent" className="tab-content">
                <div className="tab-pane" id="tab1">
                    <div className="list-group">
                        <button className="list-group-item"><span className="float-right label label-success">51</span> Home Link</button>
                        <button className="list-group-item"><span className="float-right label label-success">8</span> Link 2</button>
                        <button className="list-group-item"><span className="float-right label label-success">23</span> Link 3</button>
                        <button className="list-group-item text-muted">Link n..</button>
                    </div>
                </div>
                <div className="tab-pane active" id="tab2">
                    <div className="row">
                        <div className="col-sm-7">
                            <h4>Profile Section</h4>
                            <p>Imagine creating this simple user profile inside a tab card.</p>
                        </div>
                        <div className="col-sm-5"><img src="//placehold.it/170" className="float-right img-responsive img-rounded" alt="Profile" /></div>
                    </div>
                    <hr />
                    <button className="btn btn-info btn-block">Read More Profiles</button>
                    <div className="spacer5"></div>
                </div>
                <div className="tab-pane" id="tab3">
                    <div className="list-group">
                        <button className="list-group-item"><span className="float-right label label-info label-pill">44</span> <code>.panel</code> is now <code>.card</code></button>
                        <button className="list-group-item"><span className="float-right label label-info label-pill">8</span> <code>.nav-justified</code> is deprecated</button>
                        <button className="list-group-item"><span className="float-right label label-info label-pill">23</span> <code>.badge</code> is now <code>.label-pill</code></button>
                        <button className="list-group-item text-muted">Message n..</button>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div className="col-lg-6">
        <div id="accordion" role="tablist" aria-multiselectable="true">
            <div className="card">
                <div className="card-header" role="tab" id="headingOne" data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    Accordion example
                </div>
                <div id="collapseOne" className="card-block collapse in" role="tabpanel" aria-labelledby="headingOne">
                    <p>This is a Bootstrap 4 accordion that uses the <code>.card</code> classes instead of <code>.panel</code>. The single-open section aspect is not working because the parent option (dependent on .panel) has not yet been finalized in BS 4 alpha. </p>
                </div>
                <div className="card-header" role="tab" id="headingTwo" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    Mobile-first
                </div>
                <div id="collapseTwo" className="card-block collapse" role="tabpanel" aria-labelledby="headingTwo">
                    <p>Just like its predecessor, Bootstrap 4 is mobile-first so that you start by designing for smaller devices such as smartphones and tablets, then proceed to laptop and desktop layouts.</p>
                </div>
                <div className="card-header" role="tab" id="headingThree" data-toggle="collapse" data-parent="#accordion" href="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    Built for CSS3
                </div>
                <div id="collapseThree" className="card-block collapse" role="tabpanel" aria-labelledby="headingThree">
                    <p>Bootstrap employs a handful of important global styles and settings that you’ll need to be aware of when using it, all of which are almost exclusively geared towards the normalization of cross-browser styles.</p>
                </div>
            </div>
        </div>
        <p className="mt-4">
            <button href="/go/KrUO8QpyXP/bootstrao-4-dashboard" target="_ext">Get this Bootstrap 4 admin dashboard at Codeply</button>
        </p>
    </div>
</div>












 
    </div>
    )
}
 
export default Dashboard;