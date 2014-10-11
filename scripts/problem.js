/** @jsx React.DOM */
var Problem = React.createClass({
    getInitialState: function() {
      return {answer: this.props.data['ans']};
    },
    render: function() {
        return (
            <li className="problem">
              <div className="div_inner">
                  <div className="div_empty"></div>
                  <div id='foo' className="div_op1 div_text">
                      {this.props.data['op1']}
                  </div>
                  <div className="div_sign div_text">
                      {this.props.data['sign']}
                  </div>
                  <div className="div_op2 div_text">
                      {this.props.data['op2']}
                  </div>
              </div>
              <hr className="hr_line"/>
              <input ID="answer_input" defaultValue='' className="input_answer div_text" onKeyDown={this.onKeyDown} onChange={this.handleInputChange}/>
            </li>
            );
    },
    
    handleInputChange: function(e) {
      this.setState({value: event.target.value});
    },
    
    onKeyDown: function(e) {
      if (e.which == 13) {
        this.props.onAnswer(this.isCorrect())
      }
    },
    
    isCorrect: function() {
      return !!this.state.value && parseInt(this.state.value) == this.state.answer;
    },
});

var ProblemSet = React.createClass({
    getInitialState: function() {
      start_value = 0
      return {current_index: start_value,
              current_problem: this.props.data[start_value]};
    },
    
    render: function() {
      var problems = this.props.data.map(function (problem) {
          return (
              <Problem data={problem}/>
          );
      });
      return (
        <div>
          <div className="modal">
            <Problem data={this.state.current_problem} onAnswer={this.onAnswer}/>
          </div>
          <ul className="problemSet">
            {problems}
          </ul>
        </div>
      );
    },
    
    onAnswer: function(correct) {
      if(correct) {
        alert('woop')
      }
      else {
        alert('unwoop')
      }
      this.nextQuestion();
    },
    
    nextQuestion: function() {
      new_current_index = this.state.current_index + 1;
      new_current_problem = this.props.data[new_current_index];
      this.setState({current_index: new_current_index,
                     current_problem: new_current_problem});
    }
});

var data = [
    {op1: 13, op2: 84, sign: "+", ans: 97},
    {op1: 4, op2: 5, sign: "*", ans: 20},
    {op1: 3, op2: 4, sign: "-", ans: -1},
    {op1: 3, op2: 4, sign: "-", ans: -1},
    {op1: 3, op2: 4, sign: "-", ans: -1},
    {op1: 3, op2: 4, sign: "-", ans: -1},
    {op1: 3, op2: 4, sign: "-", ans: -1},
    {op1: 3, op2: 4, sign: "-", ans: -1},
    {op1: 3, op2: 4, sign: "-", ans: -1},
    {op1: 3, op2: 4, sign: "-", ans: -1},
    {op1: 3, op2: 4, sign: "-", ans: -1},
    {op1: 3, op2: 4, sign: "-", ans: -1},
];

React.renderComponent(
  <div>
    <div className="overlay"/>
    <ProblemSet data={data}/>
  </div>, document.body);

