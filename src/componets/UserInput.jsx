export default function UserInput({handleChange , userInput}) {

    return <section id="user-input">
        <div className="input-group">
            <p>
                <label>Inital Investment</label>
                <input type="number"
                    required
                    value={userInput.initialInvestment}
                    onChange={(event) =>
                        handleChange('initialInvestment', event.target.value
                        )} />
            </p>
            <p>
                <label>Annual Investment</label>
                <input type="number"
                    required
                    value={userInput.annualInvestment}
                    onChange={(event) =>
                        handleChange('annualInvestment', event.target.value
                        )} />
            </p>
        </div>
        <div className="input-group">
            <p>
                <label>Expected Return</label>
                <input type="number"
                    required
                    value={userInput.expectReturn}
                    onChange={(event) =>
                        handleChange('expectReturn', event.target.value
                        )} />
            </p>
            <p>
                <label>Duration</label>
                <input type="number"
                    required
                    value={userInput.duration}
                    onChange={(event) =>
                        handleChange('duration', event.target.value
                        )} />
            </p>
        </div>
    </section>
}