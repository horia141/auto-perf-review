import { AIResult } from "../../../business/common";
import { OpenAIService } from "../../../business/open-ai.service";
import {
  GenerateResultsButton,
  CopyResultsButton,
  ResultsInlineComponent,
} from "../../../components/results/ResultsInlineComponent";
import { useResultState } from "../../../state/result-state";
import { useResumeDetailsState } from "../../../state/resume.state";

export const ResumeDetails = () => {
  const resultLoading = useResultState((state) => state.loading);
  const state = useResumeDetailsState((state) => state);

  const onGenerateClick = async () => {
    const input = state;
    const res = await new OpenAIService().generateResumeDetails(input);
    state.setResult(res);
  };

  const onUpdate = (result: AIResult[]) => {
    state.setResult(result);
  };

  return (
    <div className="columns">
      <div className="column">
        <div className="review-content">
          <div className="p-4">
            <table>
              <tbody>
                <tr>
                  <td
                    colSpan={2}
                    className="row-title is-monospace is-bold pb-4"
                  >
                    1. Start by entering your details
                  </td>
                </tr>
                <tr>
                  <td>
                    <label>Name</label>
                  </td>
                  <td>
                    <input
                      className="input is-small"
                      disabled={resultLoading}
                      placeholder="Please enter your name"
                      type={"text"}
                      value={state.name}
                      onChange={(e) => state.setName(e.currentTarget.value)}
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <label>Address</label>
                  </td>
                  <td>
                    <input
                      className="input is-small"
                      disabled={resultLoading}
                      placeholder="Please enter your address"
                      type={"text"}
                      value={state.address}
                      onChange={(e) => state.setAddress(e.currentTarget.value)}
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <label>Phone</label>
                  </td>
                  <td>
                    <input
                      className="input is-small"
                      disabled={resultLoading}
                      placeholder="Please enter your phone number"
                      type={"text"}
                      value={state.phone}
                      onChange={(e) => state.setPhone(e.currentTarget.value)}
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <label>Email</label>
                  </td>
                  <td>
                    <input
                      className="input is-small"
                      disabled={resultLoading}
                      placeholder="Please enter your email address"
                      type={"text"}
                      value={state.email}
                      onChange={(e) => state.setEmail(e.currentTarget.value)}
                    />
                  </td>
                </tr>
                <tr>
                  <td colSpan={2}>
                    <div className="horizontal-line mt-2 mb-4"></div>
                  </td>
                </tr>
                <tr>
                  <td colSpan={2}>
                    <div className="buttons">
                      <GenerateResultsButton onClick={onGenerateClick} />
                      <CopyResultsButton startingState={state.result} />
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className="column">
        <ResultsInlineComponent
          startingState={state.result}
          onUpdate={onUpdate}
        />
      </div>
    </div>
  );
};
