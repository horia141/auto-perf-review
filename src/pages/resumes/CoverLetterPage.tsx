import "../../index.css";
import { CoverLetterBreadcrumbs } from "../../components/common/Breadcrumbs";
import { Footer } from "../../components/common/Footer";
import { NavbarMin } from "../../components/common/NavbarMin";
import { SubscribeFrom } from "../../components/subscribe/SubscribeForm";
import { useCoverLetterState } from "../../state/cover-letter.state";
import { useResultState } from "../../state/result-state";
import { WorkHistory } from "../../business/common";
import { AutoTextArea } from "../../components/common/AutoTextArea";

export const CoverLetterPage = () => {
  const resultLoading = useResultState((state) => state.loading);
  const state = useCoverLetterState((state) => state);

  return (
    <div className="main-body">
      <NavbarMin />
      <CoverLetterBreadcrumbs />
      <div className="layout m-4 mt-6">
        <div className="container narrow-container">
          <div className="content">
            <h3>Cover Letter</h3>
            <p>Prepare the perfect cover letter.</p>
          </div>
          <div className="review-content">
            <div id="input" className="p-2">
              <div id="input-name">
                <label>Name</label>
                <input
                  disabled={resultLoading}
                  placeholder="Myself"
                  type={"text"}
                  value={state.name}
                  onChange={(e) => state.setName(e.currentTarget.value)}
                />
              </div>
              <div id="input-name">
                <label>Role</label>
                <input
                  disabled={resultLoading}
                  placeholder="Role"
                  type={"text"}
                  value={state.role}
                  onChange={(e) => state.setRole(e.currentTarget.value)}
                />
              </div>
              <div id="input-name">
                <label>Company</label>
                <input
                  disabled={resultLoading}
                  placeholder="Company"
                  type={"text"}
                  value={state.company}
                  onChange={(e) => state.setCompany(e.currentTarget.value)}
                />
              </div>
              <div id="input-history">
                <label>History</label>
                <select
                  disabled={resultLoading}
                  value={state.history}
                  onChange={(e) =>
                    state.setHistory(e.currentTarget.value as WorkHistory)
                  }
                >
                  <option value={WorkHistory.One}>1 Year</option>
                  <option value={WorkHistory.Two}>2 Years</option>
                  <option value={WorkHistory.Three}>3 Years</option>
                  <option value={WorkHistory.Four}>4 Years</option>
                  <option value={WorkHistory.Five}>5 Years</option>
                  <option value={WorkHistory.Six}>6 Years</option>
                  <option value={WorkHistory.Seven}>7 Years</option>
                  <option value={WorkHistory.Eight}>8 Years</option>
                  <option value={WorkHistory.Nine}>9 Years</option>
                  <option value={WorkHistory.TenPlus}>10+ Years</option>
                </select>
              </div>
            </div>
            <div className="horizontal-line"></div>
            <div className="pl-2 pr-2 pt-2 pb-1">
              <AutoTextArea
                disabled={resultLoading}
                value={state.question}
                index={0}
                placeholder="Write your question here ..."
                onChange={(e, i) => state.setQuestion(e)}
              />
            </div>
          </div>
        </div>
      </div>
      <SubscribeFrom />
      <Footer />
    </div>
  );
};
