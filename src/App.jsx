class HelloWorld extends React.Component {
  render() {
    const continents = [
      "tuvieja",
      "mivieja",
      "lavieja de el",
      "y anda a cagar"
    ];
    const helloContinents = Array.from(continents, c => `Hello ${c}!`).join(
      " "
    );

    return (
      <div title="Outer div">
        <h1>{helloContinents}</h1>
      </div>
    );
  }
}

class IssueFilter extends React.Component {
  render() {
    return <div>This is a placeholder for the issue filter</div>;
  }
}

class IssueTable extends React.Component {
  render() {
    const rowStyle = {
      padding: 4,
      border: "1px solid silver"
    };
    return (
      <table style={{ borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
          </tr>
        </thead>
        <tbody>
          <IssueRow
            rowStyle={rowStyle}
            issue_id={1}
            issue_title="Tu hermana no me da bola"
          />{" "}
          {/*somehow pass Issue 1 data to this*/}
          <IssueRow
            rowStyle={rowStyle}
            issue_id={2}
            issue_title="Tengo hemorroides"
          />{" "}
          {/*somehow pass Issue 2 data to this*/}
        </tbody>
      </table>
    );
  }
}

class IssueRow extends React.Component {
  render() {
    const style = this.props.rowStyle;
    return (
      <tr>
        <td style={style}>{this.props.issue_id}</td>
        <td style={style}>{this.props.issue_title}</td>
      </tr>
    );
  }
}

class IssueAdd extends React.Component {
  render() {
    return <div>This is a placeholder for a form to add an issue</div>;
  }
}

class IssueList extends React.Component {
  render() {
    return (
      <React.Fragment>
        <h1>Issue Tracker</h1>
        <IssueFilter />
        <hr />
        <IssueTable />
        <hr />
        <IssueAdd />
      </React.Fragment>
    );
  }
}

const element = <IssueList />;

ReactDOM.render(element, document.getElementById("content"));
