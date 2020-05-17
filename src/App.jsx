// helper para capitalizar los titulos del header
function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

const initialIssues = [
  {
    id: 1,
    status: "New",
    owner: "Ravan",
    effort: 5,
    created: new Date("2018-08-15"),
    due: undefined,
    title: "Error in console when clicking Add",
  },
  {
    id: 2,
    status: "Assigned",
    owner: "Eddie",
    effort: 14,
    created: new Date("2018-08-16"),
    due: new Date("2018-08-30"),
    title: "Missing bottom border on panel",
  },
];

const sampleIssue = {
  status: "New",
  owner: "Pieta",
  title: "Completion date should be optional",
};

class IssueFilter extends React.Component {
  render() {
    return <div>This is a placeholder for the issue filter</div>;
  }
}

class IssueTable extends React.Component {
  render() {
    const issueRows = this.props.issues.map((issue) => (
      <IssueRow key={issue.id} issue={issue} />
    ));
    const tableHeader = Object.keys(initialIssues[0]).map((key, i) => (
      <th key={i}>{capitalize(key)}</th>
    ));
    return (
      <table className="bordered-table">
        <thead>
          <tr>{tableHeader}</tr>
        </thead>
        <tbody>{issueRows}</tbody>
      </table>
    );
  }
}

class IssueRow extends React.Component {
  render() {
    const issue = this.props.issue;
    return (
      <tr>
        <td>{issue.id}</td>
        <td>{issue.status}</td>
        <td>{issue.owner}</td>
        <td>{issue.created.toDateString()}</td>
        <td>{issue.effort}</td>
        <td>{issue.due ? issue.due.toDateString() : ""}</td>
        <td>{issue.title}</td>
      </tr>
    );
  }
}

class IssueAdd extends React.Component {
  constructor() {
    super();
    setTimeout(() => {
      this.props.createIssue(sampleIssue);
    }, 2000);
  }
  render() {
    return <div>This is a placeholder for a form to add an issue</div>;
  }
}

class IssueList extends React.Component {
  constructor() {
    super();
    this.state = { issues: [] };
    this.createIssue = this.createIssue.bind(this);
  }
  componentDidMount() {
    this.loadData();
  }

  loadData() {
    setTimeout(() => this.setState({ issues: initialIssues }), 500);
  }

  createIssue(issue) {
    issue.id = this.state.issues.length + 1;
    issue.created = new Date();
    const newIssueList = [...this.state.issues];
    newIssueList.push(issue);
    this.setState({ issues: newIssueList });
  }

  render() {
    return (
      <React.Fragment>
        <h1>Issue Tracker</h1>
        <IssueFilter />
        <hr />
        <IssueTable issues={this.state.issues} />
        <hr />
        <IssueAdd createIssue={this.createIssue} />
      </React.Fragment>
    );
  }
}

const element = <IssueList />;

ReactDOM.render(element, document.getElementById("content"));
