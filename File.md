Reanudar
Un currículum en línea. Sitio de demostración

una vista previa del currículum generado como un sitio web y en forma impresa

Características
Totalmente personalizable
HTML semántico
Accesible (WCAG AA)
Microformato h-resume
Autónomo (sin recursos externos)
Motor de búsqueda optimizado (meta, JSON-LD, etc ...)
CSS crítico insertado
Estilos de impresión
Empezando
Para instalar los paquetes necesarios, ejecute este comando en la carpeta raíz del sitio:

npm install
Comandos

Ejecutar npm startpara un servidor de desarrollo y recarga en vivo
Ejecutar npm run buildpara generar una compilación de producción
Implemente una bifurcación de esta plantilla en Netlify:

Implementar en Netlify

Personaliza tu currículum
Para editar el contenido y el diseño de su currículum, siga estos pasos:

1. Datos personales
Abra src/data/author.jsony edite la información que se describe a sí mismo. Se admiten las siguientes propiedades (las propiedades opcionales se pueden eliminar del archivo JSON):

Llave	Descripción	Requerido
name	tu nombre completo	requerido
occupation	la descripción de su trabajo	requerido
location	tu ciudad / estado	Opcional
avatar	el nombre de archivo de tu foto de perfil. Debe estar ubicado ensrc/assets/images/	Opcional
pronouns	tus pronombres de género preferidos	Opcional
email	Tu correo electrónico	Opcional
telephone	su número de teléfono	Opcional
website	tu sitio web personal	Opcional
skills	una serie de cadenas que describen su conjunto de habilidades	Opcional
languages	una serie de objetos que describen sus idiomas hablados; cada objeto debe incluir una propiedad name(por ejemplo, "inglés") y level(por ejemplo, "fluido")	Opcional
social	una serie de objetos para cada perfil social que desee vincular; cada objeto debe incluir una propiedad name(por ejemplo, "Github"), user(por ejemplo, "@maxboeck") y url(por ejemplo, " https://github.com/maxboeck ")	Opcional
2. Introducción
Abra entries/content/introduction.mdy edite el contenido de texto del archivo con su breve resumen de introducción personal. Limítelo a 2-3 oraciones y transmita su motivación. También puede editar el título de la sección aquí.

3. Experiencia laboral y educación
Las entradas de las secciones "experiencia laboral" y "educación" se almacenan como archivos de rebajas en src/entries/work y src/entries/education.

Elimine los archivos de demostración allí y cree los suyos propios. El texto debe describir sus responsabilidades, aprendizajes o logros. Incluya los siguientes datos de frontmatter :

Llave	Descripción	Requerido
title	el título de la entrada. en "experiencia laboral", este debería ser su rol / posición, en "educación" este debería ser el título / certificación obtenido.	requerido
start	Marca de tiempo ISO de cuándo comenzó este trabajo o educación.	requerido
end	Marca de tiempo ISO de cuándo terminó este trabajo o educación. Si no se define, esa entrada dirá "- Presente"	Opcional
organization	nombre de su empleador (cuando "trabajo") o escuela (cuando "educación")	Opcional
organizationUrl	enlace al sitio web de su empleador (cuando "trabajo") o escuela (cuando "educación")	Opcional
location	ubicación de la empresa o escuela	Opcional
4. Repositorios de Github
Si lo desea, puede incluir los cinco repositorios con más estrellas de su cuenta de Github. Esto buscará los datos actuales en el momento de la compilación, como máximo una vez al día. Para hacer esto, edite src/data/repositories.jsy cambie la YOUR_GITHUB_USERNAMEvar a su nombre de usuario de Github.

5. Contenido personalizado
Edítelo entries/content/custom.mdsi desea editar el contenido de formato libre hasta el final del CV. Esto podría ser un descargo de responsabilidad legal o una sección adicional. Elimina el archivo si no quieres que aparezca esta sección.

6. Metadatos y diseño
Abra src/data/meta.jsony reemplace urlcon la URL de su currículum alojado. También puede personalizar el idioma y la combinación de colores aquí.

Las propiedades admitidas son:

Llave	Descripción	Requerido
url	la URL de su currículum alojado, p. ej. "https://my-resume.com" . (sin barra al final)	requerido
lang	el identificador de idioma de 2 dígitos de su currículum, por ejemplo, "en", "de", etc.	requerido
locale	el código local de su currículum, por ejemplo, "en_US", "de_DE", etc.	requerido
colors.primary	El código HEX del color principal de la marca. por defecto es azul#005b96	Opcional
colors.secondary	El código HEX del color de la marca secundaria. predeterminado en rojo#fc6767	Opcional
7. Internacionalización
Hay algunas cadenas en inglés codificadas de forma rígida que se utilizan en la plantilla, como los títulos de las secciones y algunas etiquetas. Si desea cambiar el idioma predeterminado de inglés a otro, puede traducir estas cadenas cambiando los valores en data/strings.json.

Créditos
Gracias a Eric Bailey por su post "Cómo no hacer un currículum en React" , que me dio la idea.

Colofón
Fuente de título "Butler" de Fabian de Smet ( Licencia CC BY-SA 4.0 )
Imagen de avatar generada por GAN en thispersondoesnotexist.com .
