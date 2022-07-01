import React from 'react';
import { useTranslation } from 'next-i18next';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';

import { useMenu } from 'redux/menu';
import { useAlerts } from 'redux/alerts';

import { documentValidator } from 'helpers/documentValidators';
import { statesParser, UF } from 'helpers/statesParser';

import BrazilianDocumentInputMask from 'components/common-ui/InputMasks/BrazilianDocumentInputMask';
import ZipCodeInputMask from 'components/common-ui/InputMasks/ZipCodeInputMask';
import Button from 'components/common-ui/Button';
import FormsTextField from 'components/common-ui/FormsTextField';
import FormsAutocomplete from 'components/common-ui/FormsAutocomplete';
import Dialog from 'components/common-ui/Dialog';
import Form from 'components/common-ui/Form';

import { useQueryZipCode } from '@queries/zipcode';

import { ButtonContainer, CheckboxGroup } from './styles';

interface UserExtraData {
  email: string;
  password: string;
  confirmPassword: string;
  fullName: string;
  country: string;
  document: string;
  zip: string;
  city: string;
  state: string;
  street: string;
  neighborhood: string;
}

interface Props {
  storybook?: boolean;
}

const EditData: React.FC<Props> = ({ storybook }) => {
  const { t } = useTranslation('edit-data');
  const { editData, setOpenEditData } = useMenu();
  const { setSuccessfullyEditedData } = useAlerts();
  const schema = z.object({
    email: z
      .string({ invalid_type_error: t('default-helper-text') })
      .min(1, { message: t('default-helper-text') })
      .email({ message: t('email-invalid-helper-text') }),
    password: z
      .string({ invalid_type_error: t('default-helper-text') })
      .min(1, { message: t('default-helper-text') })
      .regex(
        /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/,
        { message: t('weak-password-helper-text') }
      ),
    fullName: z
      .string({ invalid_type_error: t('default-helper-text') })
      .min(1, { message: t('default-helper-text') }),
    document: z
      .string({ invalid_type_error: t('default-helper-text') })
      .min(1, { message: t('default-helper-text') })
      .refine(
        (value) =>
          documentValidator(
            value,
            value.length > 14 ? 'cnpj' : 'cpf',
            'Brasil'
          ),
        { message: t('document-invalid-helper-text') }
      ),
    country: z
      .string({ invalid_type_error: t('default-helper-text') })
      .min(1, { message: t('default-helper-text') }),
    zip: z
      .string({ invalid_type_error: t('default-helper-text') })
      .min(1, { message: t('default-helper-text') })
      .regex(/^\d{4,5}-\d{3}$/, { message: t('invalid-zip-helper-text') }),
    city: z
      .string({ invalid_type_error: t('default-helper-text') })
      .min(1, { message: t('default-helper-text') }),
    state: z
      .string({ invalid_type_error: t('default-helper-text') })
      .min(1, { message: t('default-helper-text') }),
    street: z
      .string({ invalid_type_error: t('default-helper-text') })
      .min(1, { message: t('default-helper-text') }),
    neighborhood: z
      .string({ invalid_type_error: t('default-helper-text') })
      .min(1, { message: t('default-helper-text') }),
  });
  const {
    handleSubmit,
    control,
    formState: { errors },
    watch,
    setError,
    resetField,
    setValue,
  } = useForm<UserExtraData>({
    mode: 'onBlur',
    resolver: zodResolver(schema),
    defaultValues: {
      email: '',
      password: '',
      fullName: '',
      document: '',
      country: '',
      zip: '',
      city: '',
      state: '',
      street: '',
      neighborhood: '',
    },
  });

  const zipCode = watch('zip');

  const { data: zipCodeData, isError: isZipCodeError } =
    useQueryZipCode(zipCode);

  React.useEffect(() => {
    if (zipCodeData) {
      if (zipCodeData.erro) {
        setError('zip', { message: t('invalid-zip-helper-text') });
        resetField('street');
        resetField('neighborhood');
        resetField('city');
        resetField('state');
      } else {
        setValue('street', zipCodeData.logradouro);
        setValue('neighborhood', zipCodeData.bairro);
        setValue('city', zipCodeData.localidade);
        setValue('state', statesParser(zipCodeData.uf as UF));
      }
    }
  }, [zipCodeData, setError, t, setValue, resetField]);

  React.useEffect(() => {
    if (isZipCodeError) {
      setError('zip', { message: t('invalid-zip-helper-text') });
      resetField('street');
      resetField('city');
      resetField('state');
    }
  }, [isZipCodeError, setError, t, setValue, resetField]);

  const [loading, setLoading] = React.useState(false);
  const [editPassword, setEditPassword] = React.useState(false);
  const [editEmail, setEditEmail] = React.useState(false);

  const setUserData = React.useCallback(async ({}) => {}, []);
  const afterUpdateUser = React.useCallback(
    async (type: 'both' | 'email' | 'password' | 'none') => {
      setLoading(false);
      setOpenEditData(false);
      if (['password', 'none'].includes(type)) setSuccessfullyEditedData(true);
    },
    [setOpenEditData, setSuccessfullyEditedData]
  );

  const handleUpdateUser = React.useCallback(
    async (data: UserExtraData) => {
      setLoading(true);
      const userData = {
        fullName: data.fullName,
        country: data.country,
        document: data.document,
      };
      if (editEmail && editPassword)
        return setUserData({
          ...userData,
          email: data.email,
          username: data.email,
          password: data.password,
        }).then(() => afterUpdateUser('both'));
      if (editEmail)
        return setUserData({
          ...userData,
          email: data.email,
          username: data.email,
        }).then(() => afterUpdateUser('email'));
      if (editPassword)
        return setUserData({
          ...userData,
          password: data.password,
        }).then(() => afterUpdateUser('password'));
      return setUserData({
        ...userData,
      }).then(() => afterUpdateUser('none'));
    },
    [editEmail, editPassword, setUserData, afterUpdateUser]
  );

  return (
    <Dialog
      open={!!editData}
      onClose={() => setOpenEditData(false)}
      dialogTitle
      title={t('title')}
      storybook={storybook}
    >
      <Form onSubmit={handleSubmit(handleUpdateUser)}>
        <FormsTextField
          name="fullName"
          control={control}
          label={t('full-name-label')}
          type="text"
          error={!!errors.fullName}
          required
          fullWidth
        />
        <FormsAutocomplete
          name="country"
          control={control}
          label={t('country-label')}
          type="text"
          options={['Brasil', 'Portugal']}
          getOptionLabel={(option) => option}
          required
          fullWidth
          error={!!errors.country}
          autoComplete
          autoSelect
        />
        <FormsTextField
          name="document"
          control={control}
          label={t('document-label')}
          type="text"
          error={!!errors.document}
          required
          fullWidth
          inputLabelProps={{
            shrink: !!watch('document'),
          }}
          inputComponent={BrazilianDocumentInputMask}
          helperText={
            errors.document?.type === 'validate'
              ? t('document-invalid-helper-text')
              : null
          }
        />
        <FormsTextField
          name="zip"
          control={control}
          type="text"
          label={t('zip-label')}
          helperText={errors.zip?.message}
          error={!!errors?.zip}
          fullWidth
          required
          inputComponent={ZipCodeInputMask}
          inputLabelProps={{
            shrink: !!watch('zip'),
          }}
        />
        <FormsTextField
          name="street"
          control={control}
          type="text"
          label={t('street-label')}
          helperText={errors.street?.message}
          error={!!errors?.street}
          fullWidth
          required
          inputLabelProps={{
            shrink: !!watch('zip'),
          }}
        />
        <FormsTextField
          name="neighborhood"
          control={control}
          type="text"
          label={t('neighborhood-label')}
          helperText={errors.neighborhood?.message}
          error={!!errors?.neighborhood}
          fullWidth
          required
          inputLabelProps={{
            shrink: !!watch('zip'),
          }}
        />
        <FormsTextField
          name="city"
          control={control}
          type="text"
          label={t('city-label')}
          helperText={errors.city?.message}
          error={!!errors?.city}
          fullWidth
          required
          inputLabelProps={{
            shrink: !!watch('zip'),
          }}
        />
        <FormsTextField
          name="state"
          control={control}
          type="text"
          label={t('state-label')}
          helperText={errors.state?.message}
          error={!!errors?.state}
          fullWidth
          required
          inputLabelProps={{
            shrink: !!watch('zip'),
          }}
        />
        <CheckboxGroup>
          <FormControlLabel
            control={
              <Checkbox
                color="primary"
                checked={editEmail}
                onChange={(_event, checked) => setEditEmail(checked)}
              />
            }
            label={t('edit-email-checkbox')}
          />
          <FormControlLabel
            control={
              <Checkbox
                color="primary"
                checked={editPassword}
                onChange={(_event, checked) => setEditPassword(checked)}
              />
            }
            label={t('edit-password-checkbox')}
          />
        </CheckboxGroup>
        {editEmail ? (
          <FormsTextField
            name="email"
            control={control}
            label={t('email-label')}
            type="text"
            error={!!errors.email}
            required={editEmail}
            fullWidth
          />
        ) : null}
        {editPassword ? (
          <>
            <FormsTextField
              name="password"
              control={control}
              label={t('password-label')}
              type="password"
              error={!!errors.password}
              required={editPassword}
              fullWidth
              pattern={
                /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/
              }
              helperText={
                errors.password?.type === 'pattern'
                  ? t('weak-password-helper-text')
                  : null
              }
            />
          </>
        ) : null}
        <ButtonContainer>
          <Button variant="filled" fullWidth isLoading={loading} type="submit">
            {t('confirm-button')}
          </Button>
        </ButtonContainer>
      </Form>
    </Dialog>
  );
};

export default EditData;
