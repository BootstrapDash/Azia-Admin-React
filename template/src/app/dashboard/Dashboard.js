import React, { Component } from 'react'
import {Line, Bar, Pie } from 'react-chartjs-2';

export class Dashboard extends Component { 
  websiteAudienceChartData = {
    labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40', '41', '42', '43', '44', '45', '46', '47', '48', '49',
    '50', '51', '52', '53', '54', '55', '56', '57', '58', '59', '60', '61', '62', '63', '64', '65', '66', '67', '68', '69', '70', '71', '72', '73', '74', '75', '76', '77', '78', '79', '80', '81', '82', '83', '84', '85', '86', '87', '88', '89', '90', '91', '92', '93', '94', '95', '96', '97', '98', '99', 
    '100', '101', '102', '103', '104', '105', '106', '107', '108', '109', '110', '111', '112', '113', '114', '115', '116', '117', '118', '119', '120', '121', '122', '123', '124', '125', '126', '127', '128', '129', '130', '131', '132', '133', '134', '135', '136', '137', '138', '139', '140', '141', '142', '143', '144', '145', '146', '147', '148', '149'],
    datasets: [{
      label: 'This week',
      data: [36.57, 38.9, 42.3, 41.8, 37.4, 32.5, 28.1, 24.7, 23.4, 20.4, 16.5, 12.1, 9.2, 5.1, 9.6, 10.8, 13.2, 18.2, 13.9, 18.7, 13.7, 11.3, 13.7, 15.8, 12.9, 17.5, 21.9, 18.2, 14.3, 18.2, 14.8, 13.01, 14.5, 15.4, 16.6, 19.4, 14.5, 17.7, 13.8, 9.4, 11.9, 9.7, 6.1, 1.4, 2.3, 2.3, 4.5, 3.7, 5.7, 5.08, 1.9, 8.2,
        7.9, 5.02, 2.8, 6.8, 6.2, 9.8, 9.3, 11.9, 10, 9, 6, 4.5, 2.7, 4.3, 3.6, 4.2, 2, 1.4, 3.7, 1.5, 5.7, 4.9, 1, 4.7, 6.3, 4.2, 5.1, 5.2, 3.8, 8.2, 7.2, 6.5, 1.7, 11.4, 10.5, 3.8, 4.7, 8.5, 10.2, 11, 15.6, 19.7, 18.1, 13.5, 12, 7.5, 3.7, 9.7, 9.2, 13.4, 18.4, 22.4, 18.7, 15.2, 14.5, 14.4, 12, 13.7, 13.3, 15.4,
         15.8, 17.7, 14.3, 10.6, 12.7, 14.7, 18.6, 22.9, 18, 22.8, 23.8, 27.1, 24.7, 20, 22.7, 20.9, 16.6, 15.1, 13.1, 10.7, 11.4, 13.1, 10.1, 9.2, 9.2, 10.3, 15.2, 12.5, 14, 18.2, 16.3, 17.7, 18.9, 15.3, 18.1, 16.3, 14.8, 10 ],
      borderWidth: 2,
      fill: true,
      backgroundColor: ['rgba(255, 255, 255, 1)'],
      borderColor: ['rgb(0, 123, 255)']
    },{
      label: 'Current week',
      data: [53, 50.3, 49.4, 47.7, 49, 50.6, 48.7, 48.8, 53.5, 52.9, 49, 50.2, 48.3, 44.8, 40.7, 41.2, 45.6, 44.6, 41.3, 38.2, 39.6, 41, 39.4, 35.6, 38.5, 38.5, 40.6, 38.7, 42.9, 46.3, 43.5, 40.6, 36.5, 31.7, 28.9, 29.6, 29.5, 33.1, 37, 35.8, 37.6, 39.6, 39, 34.1, 37.4, 39.2, 38.4, 37.7, 40.1, 35.8, 31.5, 31.8,
        30.5, 25.7, 28.2, 28.4, 30, 32.1, 32.9, 37.6, 35.2, 39.1, 41.3, 41.4, 43.7, 39.4, 39.2, 43.8, 42.4, 43.6, 38.7 , 43.5, 41.8, 44.8, 46.1, 47.6, 49, 46.4, 51.2, 50.1, 53.6, 56, 52.7, 56.6, 60.2, 58.3, 56.5, 55.7, 54.7, 54.2, 58.6, 57, 60.5, 57.6, 56.1, 55.1, 54.3, 52.3, 54.5, 54.1, 51.9, 51.1, 46.3, 48.3,
         45.8, 48.2, 43.3, 45.8, 43.4, 41.3, 40.9, 38.4, 40.1, 44.8, 44, 41.4, 37.8, 39.2, 35.2, 32.1, 35.6, 38, 37.9, 38.7, 37.4, 37.5, 33.1, 35, 33.1, 31.8, 29.1, 31.9, 34.3, 32.9, 33.1, 37.1, 32.6, 36.9, 35.9, 38.1, 42.5, 41.5, 45.5, 46.3, 45.7, 45.4, 42.5, 44.4, 39.7, 44.7],
      borderWidth: 2,
      fill: true,
      backgroundColor: ['rgba(86, 11, 208, .05)'],
      borderColor: ['rgb(86, 11, 208)'],
    }]
  };

  websiteAudienceChartOptions = {
    scales: {
      yAxes: [{
        display: true,
        gridLines: {
          drawBorder: false,
          display: true,
          drawTicks: false,
          color: '#eef0fa',
          zeroLineColor: 'rgba(90, 113, 208, 0)',
        },
        ticks: {
          display: false,
          beginAtZero: true,
          min: 0,
          max: 100,
          stepSize: 22,
          padding: 10,
        }
      }],
      xAxes: [{
        display: false,
        position: 'bottom',
        gridLines: {
          drawBorder: false,
          display: false,
          drawTicks: false,
        },
        ticks: {
          beginAtZero: true,
          stepSize: 10,
          fontColor: "#a7afb7",
          padding: 10,
        }
      }],
    },
    legend: {
      display: false,
    },
    elements: {
      point: {
        radius: 0
      },
      line: {
        tension: 0
      }
    },
    tooltips: {
      backgroundColor: 'rgba(2, 171, 254, 1)',
    },
  };

  bounceRateChartData = {
    labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40', '41', '42', '43', '44', '45', '46', '47', '48', '49', '50', '51'],
    datasets: [{
      data: [27.2, 29.9, 29.6, 25.7, 25.9, 29.3, 31.1, 27.9, 28.4, 25.4, 23.2, 18.2, 14, 12.7, 11, 13.7, 9.7, 12.6, 10.9, 12.7, 13.8, 12.9, 13.8, 10.2, 5.8, 7.6, 8.8, 5.6, 5.6, 6.3, 4.2, 3.6, 5.4, 6.5, 8.1, 10.9, 7.6, 9.7, 10.9, 9.5, 5.4, 4.9, .7, 2.3, 5.5, 10, 10.6, 8.3, 8.4, 8.5, 5.8 ],
      borderWidth: 2,
      fill: true,
      backgroundColor: ['rgba(0, 204, 212, .2)'],
      borderColor: ['rgb(0, 204, 212)']
    }]
  };

  bounceRateChartOptions = {
    scales: {
      yAxes: [{
        display: false,
        gridLines: {
          drawBorder: false,
          display: true,
          drawTicks: false,
        },
        ticks: {
          display: false,
          beginAtZero: true,
          min: 0,
          max: 40,
          stepSize: 10,
        }
      }],
      xAxes: [{
        display: false,
        position: 'bottom',
        gridLines: {
          drawBorder: false,
          display: false,
          drawTicks: false,
        },
        ticks: {
          beginAtZero: true,
          stepSize: 10,
          fontColor: "#a7afb7",
          padding: 10,
        }
      }],
    },
    legend: {
      display: false,
    },
    elements: {
      point: {
        radius: 0
      },
      line: {
        tension: 0
      }
    },
    tooltips: {
      backgroundColor: 'rgba(2, 171, 254, 1)',
    },
  };

  totalUsersChartData = {
    labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18'],
    datasets: [{
      data: [27.2, 29.9, 29.6, 25.7, 25.9, 29.3, 31.1, 27.9, 28.4, 25.4, 23.2, 18.2, 14, 12.7, 11, 13.7, 9.7, 12.6, 10.9, 12.7, 13.8],
      borderWidth: 1,
      fill: false,
      backgroundColor: '#007bff',
      borderColor: '#007bff'
    }]
  };

  totalUsersChartOptions = {
    scales: {
      yAxes: [{
        display: false,
        ticks: {
          display: false,
        },
        gridLines: {
          drawBorder: false,
          display: false
        }
      }],
      xAxes: [{
        display: false,
        barThickness: 5.5,
        ticks: {
          display: false,
        },
        gridLines: {
          drawBorder: false,
          display: false
        }
      }]

    },
    legend: {
      display: false
    },
    elements: {
      point: {
        radius: 0
      }
    }
  };

  allSessionsChartData = {
    labels: [0,1,2,3,4,5,6,7],
    datasets: [{
      label: '# of Votes',
      data: [2, 4, 10, 20, 45, 40, 35, 18],
      borderWidth: 1,
      fill: false,
      backgroundColor: '#560bd0'
    },
    {
      label: '# of Rate',
      data: [3, 6, 15, 35, 50, 45, 35, 25],
      borderWidth: 1,
      fill: false,
      backgroundColor: '#cad0e8'
    }]
  };

  allSessionsChartOptions = {
    scales: {
      yAxes: [{
        display: false,
        ticks: {
          beginAtZero:true,
          fontSize: 11,
          max: 80
        },
        gridLines: {
          drawBorder: false,
        }
      }],
      xAxes: [{
        barPercentage: 0.6,
        gridLines: {
          color: 'rgba(0,0,0,0.08)',
          drawBorder: false
        },
        ticks: {
          beginAtZero:true,
          fontSize: 11,
          display: false
        }
      }]

    },
    legend: {
      display: false
    },
    elements: {
      point: {
        radius: 0
      }
    }
  };

  sessionsChannelChartData = {
    labels: ['Search', 'Email', 'Referral', 'Social', 'Other'],
    datasets: [{
      data: [25,20,30,15,10],
      backgroundColor: ['#6f42c1', '#007bff','#17a2b8','#00cccc','#adb2bd'],
    }]
  };

  sessionsChannelChartOptions = {
    cutoutPercentage: 50,
    maintainAspectRatio: false,
    responsive: true,
    legend: {
      display: false,
    },
    animation: {
      animateScale: true,
      animateRotate: true
    }
  };

  acquisitionChart1Data = {
    labels: ['1', '2', '3', '4', '5'],
    datasets: [{
      data: [4,2.5,5,3,5],
      borderWidth: 1,
      fill: false,
      backgroundColor: '#fff',
      borderColor: '#fff'
    }]
  };

  acquisitionChart1Options = {
    scales: {
      yAxes: [{
        display: false,
        ticks: {
          display: false,
        },
        gridLines: {
          drawBorder: false,
          display: false
        }
      }],
      xAxes: [{
        display: false,
        barThickness: 5.5,
        ticks: {
          display: false,
        },
        gridLines: {
          drawBorder: false,
          display: false
        }
      }]

    },
    legend: {
      display: false
    },
    elements: {
      point: {
        radius: 0
      }
    }
  };

  acquisitionChart2Data = {
    labels: ['1', '2', '3', '4', '5'],
    datasets: [{
      data: [5,2,3,5,1.5],
      borderWidth: 1,
      fill: false,
      backgroundColor: '#fff',
      borderColor: '#fff'
    }]
  };

  acquisitionChart2Options = {
    scales: {
      yAxes: [{
        display: false,
        ticks: {
          display: false,
        },
        gridLines: {
          drawBorder: false,
          display: false
        }
      }],
      xAxes: [{
        display: false,
        barThickness: 5.5,
        ticks: {
          display: false,
        },
        gridLines: {
          drawBorder: false,
          display: false
        }
      }]

    },
    legend: {
      display: false
    },
    elements: {
      point: {
        radius: 0
      }
    }
  };

  sessionsChart1Data = {
    labels: ['Search', 'Email'],
    datasets: [{
      data: [40,60],
      backgroundColor: ['#007bff', '#cad0e8'],
      borderColor: ['#007bff', '#cad0e8'],
    }]
  };

  sessionsChart1Options = {
    cutoutPercentage: 78,
    maintainAspectRatio: false,
    responsive: true,
    legend: {
      display: false,
    },
    animation: {
      animateScale: true,
      animateRotate: true
    }
  };

  sessionsChart2Data = {
    labels: ['Search', 'Email'],
    datasets: [{
      data: [25,75],
      backgroundColor: ['#00cccc', '#cad0e8'],
      borderColor: ['#00cccc', '#cad0e8']
    }]
  };

  sessionsChart2Options = {
    cutoutPercentage: 78,
    maintainAspectRatio: false,
    responsive: true,
    legend: {
      display: false,
    },
    animation: {
      animateScale: true,
      animateRotate: true
    }
  };

  toggleProBanner() {
    document.querySelector('.proBanner').classList.toggle("hide");
  }

  render() {
    return (
      <div>
        <div className="proBanner">
          <div>
            <span className="d-flex align-items-center purchase-popup">
              <p className="m-0">Get tons of UI components, Plugins, multiple layouts, 20+ sample pages, and more!</p>
              <a href="https://www.bootstrapdash.com/product/azia-react/?utm_source=organic&utm_medium=banner&utm_campaign=free-preview" rel="noopener noreferrer" target="_blank" className="btn btn-sm btn-primary ml-auto">Check Pro Version</a>
              <i className="typcn typcn-delete-outline bannerClose" onClick={this.toggleProBanner}></i>
            </span>
          </div>
        </div>
        <div className="container p-md-0">
          <div className="az-content-body">
            <div className="az-dashboard-one-title">
              <div>
                <h2 className="az-dashboard-title">Hi, welcome back!</h2>
                <p className="az-dashboard-text">Your web analytics dashboard template.</p>
              </div>
              <div className="az-content-header-right">
                <div className="media">
                  <div className="media-body">
                    <label>Start Date</label>
                    <h6>Oct 10, 2018</h6>
                  </div>{/* media-body */}
                </div>{/* media */}
                <div className="media">
                  <div className="media-body">
                    <label>End Date</label>
                    <h6>Oct 23, 2018</h6>
                  </div>{/* media-body */}
                </div>{/* media */}
                <div className="media">
                  <div className="media-body">
                    <label>Event Category</label>
                    <h6>All Categories</h6>
                  </div>{/* media-body */}
                </div>{/* media */}
                <a href="#/" className="btn btn-purple">Export</a>
              </div>
            </div>{/* az-dashboard-one-title */}

            <div className="az-dashboard-nav">
              <nav className="nav">
                <a className="nav-link active" data-toggle="tab" href="#/">Overview</a>
                <a className="nav-link" data-toggle="tab" href="#/">Audiences</a>
                <a className="nav-link" data-toggle="tab" href="#/">Demographics</a>
                <a className="nav-link" data-toggle="tab" href="#/">More</a>
              </nav>

              <nav className="nav">
                <a className="nav-link" href="#/"><i className="far fa-save"></i> Save Report</a>
                <a className="nav-link" href="#/"><i className="far fa-file-pdf"></i> Export to PDF</a>
                <a className="nav-link" href="#/"><i className="far fa-envelope"></i>Send to Email</a>
                <a className="nav-link" href="#/"><i className="fas fa-ellipsis-h"></i></a>
              </nav>
            </div>

            <div className="row row-sm mg-b-20">
              <div className="col-lg-7 ht-lg-100p">
                <div className="card card-dashboard-one">
                  <div className="card-header">
                    <div>
                      <h6 className="card-title">Website Audience Metrics</h6>
                      <p className="card-text">Audience to which the users belonged while on the current date range.</p>
                    </div>
                    <div className="btn-group">
                      <button className="btn active">Day</button>
                      <button className="btn">Week</button>
                      <button className="btn">Month</button>
                    </div>
                  </div>{/* card-header */}
                  <div className="card-body">
                    <div className="card-body-top">
                      <div>
                        <label className="mg-b-0">Users</label>
                        <h2>13,956</h2>
                      </div>
                      <div>
                        <label className="mg-b-0">Bounce Rate</label>
                        <h2>33.50%</h2>
                      </div>
                      <div>
                        <label className="mg-b-0">Page Views</label>
                        <h2>83,123</h2>
                      </div>
                      <div>
                        <label className="mg-b-0">Sessions</label>
                        <h2>16,869</h2>
                      </div>
                    </div>{/* card-body-top */}
                    <div className="page-view-chart-wrapper">
                      <Line data={this.websiteAudienceChartData} options={this.websiteAudienceChartOptions} />
                    </div>{/* flot-chart-wrapper */}
                  </div>{/* card-body */}
                </div>{/* card */}
              </div>{/* col */}
              <div className="col-lg-5 mg-t-20 mg-lg-t-0">
                <div className="row row-sm">
                  <div className="col-sm-6">
                    <div className="card card-dashboard-two">
                      <div className="card-header">
                        <h6>33.50% <i className="icon ion-md-trending-up tx-success"></i> <small>18.02%</small></h6>
                        <p>Bounce Rate</p>
                      </div>{/* card-header */}
                      <div className="card-body">
                        <div className="chart-wrapper">
                          <Line data={this.bounceRateChartData} options={this.bounceRateChartOptions} />
                        </div>{/* chart-wrapper */}
                      </div>{/* card-body */}
                    </div>{/* card */}
                  </div>{/* col */}
                  <div className="col-sm-6 mg-t-20 mg-sm-t-0">
                    <div className="card card-dashboard-two">
                      <div className="card-header">
                        <h6>86k <i className="icon ion-md-trending-down tx-danger"></i> <small>0.86%</small></h6>
                        <p>Total Users</p>
                      </div>{/* card-header */}
                      <div className="card-body">
                        <div className="chart-wrapper">
                          <Bar data={this.totalUsersChartData} options={this.totalUsersChartOptions} />
                        </div>{/* chart-wrapper */}
                      </div>{/* card-body */}
                    </div>{/* card */}
                  </div>{/* col */}
                  <div className="col-sm-12 mg-t-20">
                    <div className="card card-dashboard-three">
                      <div className="card-header">
                        <p>All Sessions</p>
                        <h6>16,869 <small className="tx-success"><i className="icon ion-md-arrow-up"></i> 2.87%</small></h6>
                        <small>The total number of sessions within the date range. It is the period time a user is actively engaged with your website, page or app, etc.</small>
                      </div>{/* card-header */}
                      <div className="card-body">
                        <div className="chart d-flex align-items-end">
                          <Bar data={this.allSessionsChartData} options={this.allSessionsChartOptions} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>{/* row */}
              </div>{/*col */}
            </div>{/* row */}

            <div className="row row-sm mg-b-20">
              <div className="col-lg-4">
                <div className="card card-dashboard-pageviews">
                  <div className="card-header">
                    <h6 className="card-title">Page Views by Page Title</h6>
                    <p className="card-text">This report is based on 100% of sessions.</p>
                  </div>{/* card-header */}
                  <div className="card-body">
                    <div className="az-list-item">
                      <div>
                        <h6>Admin Home</h6>
                        <span>/demo/admin/index.html</span>
                      </div>
                      <div>
                        <h6 className="tx-primary">7,755</h6>
                        <span>31.74% (-100.00%)</span>
                      </div>
                    </div>{/* list-group-item */}
                    <div className="az-list-item">
                      <div>
                        <h6>Form Elements</h6>
                        <span>/demo/admin/forms.html</span>
                      </div>
                      <div>
                        <h6 className="tx-primary">5,215</h6>
                        <span>28.53% (-100.00%)</span>
                      </div>
                    </div>{/* list-group-item */}
                    <div className="az-list-item">
                      <div>
                        <h6>Utilities</h6>
                        <span>/demo/admin/util.html</span>
                      </div>
                      <div>
                        <h6 className="tx-primary">4,848</h6>
                        <span>25.35% (-100.00%)</span>
                      </div>
                    </div>{/* list-group-item */}
                    <div className="az-list-item">
                      <div>
                        <h6>Form Validation</h6>
                        <span>/demo/admin/validation.html</span>
                      </div>
                      <div>
                        <h6 className="tx-primary">3,275</h6>
                        <span>23.17% (-100.00%)</span>
                      </div>
                    </div>{/* list-group-item */}
                    <div className="az-list-item">
                      <div>
                        <h6>Modals</h6>
                        <span>/demo/admin/modals.html</span>
                      </div>
                      <div>
                        <h6 className="tx-primary">3,003</h6>
                        <span>22.21% (-100.00%)</span>
                      </div>
                    </div>{/* list-group-item */}
                  </div>{/* card-body */}
                </div>{/* card */}

              </div>{/* col */}
              <div className="col-lg-8 mg-t-20 mg-lg-t-0">
                <div className="card card-dashboard-four">
                  <div className="card-header">
                    <h6 className="card-title">Sessions by Channel</h6>
                  </div>{/* card-header */}
                  <div className="card-body row">
                    <div className="col-md-6 d-flex align-items-center">
                      <div className="chart">
                        <Pie data={this.sessionsChannelChartData} options={this.sessionsChannelChartOptions} />
                      </div>
                    </div>{/* col */}
                    <div className="col-md-6 col-lg-5 mg-lg-l-auto mg-t-20 mg-md-t-0">
                      <div className="az-traffic-detail-item">
                        <div>
                          <span>Organic Search</span>
                          <span>1,320 <span>(25%)</span></span>
                        </div>
                        <div className="progress">
                          <div className="progress-bar bg-purple wd-25p" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>{/* progress */}
                      </div>
                      <div className="az-traffic-detail-item">
                        <div>
                          <span>Email</span>
                          <span>987 <span>(20%)</span></span>
                        </div>
                        <div className="progress">
                          <div className="progress-bar bg-primary wd-20p" role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>{/* progress */}
                      </div>
                      <div className="az-traffic-detail-item">
                        <div>
                          <span>Referral</span>
                          <span>2,010 <span>(30%)</span></span>
                        </div>
                        <div className="progress">
                          <div className="progress-bar bg-info wd-30p" role="progressbar" aria-valuenow="30" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>{/* progress */}
                      </div>
                      <div className="az-traffic-detail-item">
                        <div>
                          <span>Social</span>
                          <span>654 <span>(15%)</span></span>
                        </div>
                        <div className="progress">
                          <div className="progress-bar bg-teal wd-15p" role="progressbar" aria-valuenow="15" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>{/* progress */}
                      </div>
                      <div className="az-traffic-detail-item">
                        <div>
                          <span>Other</span>
                          <span>400 <span>(10%)</span></span>
                        </div>
                        <div className="progress">
                          <div className="progress-bar bg-gray-500 wd-10p" role="progressbar" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>{/* progress */}
                      </div>
                    </div>{/* col */}
                  </div>{/* card-body */}
                </div>{/* card-dashboard-four */}
              </div>{/* col */}
            </div>{/* row */}

            <div className="row row-sm mg-b-20 mg-lg-b-0">
              <div className="col-lg-5 col-xl-4">
                <div className="row row-sm">
                  <div className="col-md-6 col-lg-12 mg-b-20 mg-md-b-0 mg-lg-b-20">
                    <div className="card card-dashboard-five">
                      <div className="card-header">
                        <h6 className="card-title">Acquisition</h6>
                        <span className="card-text">Tells you where your visitors originated from, such as search engines, social networks or website referrals.</span>
                      </div>{/* card-header */}
                      <div className="card-body row row-sm">
                        <div className="col-6 d-sm-flex align-items-center">
                          <div className="card-chart bg-primary acquisition-chart">
                            <Bar className="w-50" data={this.acquisitionChart1Data} options={this.acquisitionChart1Options} />
                          </div>
                          <div>
                            <label>Bounce Rate</label>
                            <h4>33.50%</h4>
                          </div>
                        </div>{/* col */}
                        <div className="col-6 d-sm-flex align-items-center">
                          <div className="card-chart bg-purple acquisition-chart">
                            <Bar data={this.acquisitionChart2Data} options={this.acquisitionChart2Options} />
                          </div>
                          <div>
                            <label>Sessions</label>
                            <h4>9,065</h4>
                          </div>
                        </div>{/* col */}
                      </div>{/* card-body */}
                    </div>{/* card-dashboard-five */}
                  </div>{/* col */}
                  <div className="col-md-6 col-lg-12">
                    <div className="card card-dashboard-five">
                      <div className="card-header">
                        <h6 className="card-title">Sessions</h6>
                        <span className="card-text"> A session is the period time a user is actively engaged with your website, app, etc.</span>
                      </div>{/* card-header */}
                      <div className="card-body row row-sm">
                        <div className="col-6">
                          <div className="d-sm-flex align-items-center">
                            <div className="mg-b-10 mg-sm-b-0 mg-sm-r-10 wd-50 ht-40">
                              <Pie data={this.sessionsChart1Data} options={this.sessionsChart1Options} />
                            </div>
                            <div>
                              <label>% New Sessions</label>
                              <h4>26.80%</h4>
                            </div>
                          </div>
                        </div>{/* col */}
                        <div className="col-6">
                          <div className="d-sm-flex align-items-center">
                            <div className="mg-b-10 mg-sm-b-0 mg-sm-r-10 wd-50 ht-40">
                              <Pie data={this.sessionsChart2Data} options={this.sessionsChart2Options} />
                            </div>
                            <div>
                              <label>Pages/Session</label>
                              <h4>1,005</h4>
                            </div>
                          </div>
                        </div>{/* col */}
                      </div>{/* card-body */}
                    </div>{/* card-dashboard-five */}
                  </div>{/* col */}
                </div>{/* row */}
              </div>{/* col-lg-3 */}
              <div className="col-lg-7 col-xl-8 mg-t-20 mg-lg-t-0">
                <div className="card card-table-one">
                  <h6 className="card-title">What pages do your users visit</h6>
                  <p className="az-content-text mg-b-20">Part of this date range occurs before the new users metric had been calculated, so the old users metric is displayed.</p>
                  <div className="table-responsive">
                    <table className="table">
                      <thead>
                        <tr>
                          <th className="wd-5p">&nbsp;</th>
                          <th className="wd-45p">Country</th>
                          <th>Entrances</th>
                          <th>Bounce Rate</th>
                          <th>Exits</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td><i className="flag-icon flag-icon-us flag-icon-squared"></i></td>
                          <td><strong>United States</strong></td>
                          <td><strong>134</strong> (1.51%)</td>
                          <td>33.58%</td>
                          <td>15.47%</td>
                        </tr>
                        <tr>
                          <td><i className="flag-icon flag-icon-gb flag-icon-squared"></i></td>
                          <td><strong>United Kingdom</strong></td>
                          <td><strong>290</strong> (3.30%)</td>
                          <td>9.22%</td>
                          <td>7.99%</td>
                        </tr>
                        <tr>
                          <td><i className="flag-icon flag-icon-in flag-icon-squared"></i></td>
                          <td><strong>India</strong></td>
                          <td><strong>250</strong> (3.00%)</td>
                          <td>20.75%</td>
                          <td>2.40%</td>
                        </tr>
                        <tr>
                          <td><i className="flag-icon flag-icon-ca flag-icon-squared"></i></td>
                          <td><strong>Canada</strong></td>
                          <td><strong>216</strong> (2.79%)</td>
                          <td>32.07%</td>
                          <td>15.09%</td>
                        </tr>
                        <tr>
                          <td><i className="flag-icon flag-icon-fr flag-icon-squared"></i></td>
                          <td><strong>France</strong></td>
                          <td><strong>216</strong> (2.79%)</td>
                          <td>32.07%</td>
                          <td>15.09%</td>
                        </tr>
                        <tr>
                          <td><i className="flag-icon flag-icon-ph flag-icon-squared"></i></td>
                          <td><strong>Philippines</strong></td>
                          <td><strong>197</strong> (2.12%)</td>
                          <td>32.07%</td>
                          <td>15.09%</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>{/* table-responsive */}
                </div>{/* card */}
              </div>{/* col-lg */}

            </div>{/* row */}
          </div>{/* az-content-body */}
        </div>
      </div>
    )
  }
}

export default Dashboard
