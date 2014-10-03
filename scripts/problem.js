/** @jsx React.DOM */
var Problem = React.createClass({
    render: function() {
        var inner = this.props.data.map(function (problem) {
            return (
                <div className="div_inner">
                    <div className="div_empty"></div>
                    <div id='foo' className="div_op1 div_text">
                        {problem.op1}
                    </div>
                    <div className="div_sign div_text">
                        {problem.sign}
                    </div>
                    <div className="div_op2 div_text">
                        {problem.op2}
                    </div>
                </div>
            );
        });
        return ( 
            <div className="div_outer">
              {inner}
              <hr className="hr_line"/>
              <div>
                <input className="input_answer div_text"/>
              </div>
            </div>
            );
    }
});

var data = [
  {op1: "3", op2: "4", sign: "+"}
];

React.renderComponent(<Problem data={data} />, document.body);
