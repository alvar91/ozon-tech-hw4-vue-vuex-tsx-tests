<script lang="tsx">
import { VNode } from "vue";
import { Vue, Component, Prop } from "vue-property-decorator";

import { useStore } from "vuex-simple";
import { MainModule } from '@/store/modules/main/main';
import { SET_FORM_INPUT } from '@/store/mutationsVariables';

@Component({
  name: "InputDate",
})
export default class InputDate extends Vue {
  @Prop({ required: true, default: "" }) readonly title!: string;
  @Prop({ required: true, default: "" }) readonly name!: string;
  @Prop({ required: true, default: "" }) readonly value!: string;
  @Prop({ required: false, default: false }) readonly isDisabled!: boolean;
  @Prop({ required: false, default: false }) readonly isWide!: boolean;

  private store: MainModule = useStore(this.$store);

  private setFormInput({target}) {
    this.store[SET_FORM_INPUT](target)
  }

  render(): VNode {
    const { $style, title, name, value, isDisabled, setFormInput } = this;

    return (
      <label class={$style.card__field}>
        <span class={$style.card__title}>{title}</span>
        <input
          type="date"
          class={[$style.card__input, $style["card__input--date"]]}
          name={name}
          value={value}
          disabled={isDisabled}
          min="1900-01-01"
          on={{ input: setFormInput }}
        />
      </label>
    );
  }
}
</script>

<style module>
.card__field {
  display: flex;
  flex-direction: column;
  margin-right: var(--input-mr);
  margin-bottom: var(--input-mb);
  font-size: var(--main-fz);
  color: var(--text-light-grey);
}

.card__field:nth-child(3),
.card__field:nth-child(6),
.card__field:last-child {
  margin-right: 0;
}

@media (max-width: 1440px) {
  .card__field:nth-child(3),
  .card__field:nth-child(6),
  .card__field:last-child {
    margin-right: var(--input-mr);
  }
}

.card__title {
  margin-bottom: var(--title-mb);
  font-size: 13px;
}

.card__input {
  position: relative;
  min-width: 309px;
  padding: 14px;
  border: none;
  border-radius: 8px;
  background: var(--main-grey);
  font-size: var(--main-fz);
  line-height: 16px;
  color: var(--text-color);
  transition: outline 0.2s ease;
  appearance: none;
}

.card__input:disabled {
  color: var(--input-disabled);
}

@media (max-width: 1440px) {
  .card__input {
    min-width: 100%;
  }
}

@media (max-width: 730px) {
  .card__input {
    min-width: 288px;
  }
}

.card__input--date {
  padding: 12.5px 14px;
}

.card__input--date::after {
  content: "";
  position: absolute;
  right: 13px;
  top: 10px;
  display: inline-block;
  width: 24px;
  height: 24px;
  background: url("@/assets/images/calendar-input.svg") var(--main-grey);
  pointer-events: none;
}
.card__input--wide {
  min-width: 100%;
  padding-top: 14px;
}

@media (max-width: 730px) {
  .card__input--wide {
    min-width: 288px;
  }
}

.card__field--wide {
  width: 100%;
}
</style>
