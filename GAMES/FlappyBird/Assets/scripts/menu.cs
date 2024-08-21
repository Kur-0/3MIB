using UnityEngine;
using UnityEngine.SceneManagement;
using UnityEngine.UIElements; // Corrigido o namespace

public class menu : MonoBehaviour
{
    private Button btnPlay;
    private Button btnScore;

    void OnEnable()
    {
        // Pegando a raiz do documento UI
        var root = GetComponent<UIDocument>().rootVisualElement;

        // Pegando o botão pela referência do nome
        btnPlay = root.Q<Button>("btnPlay");
        btnScore = root.Q<Button>("btnScore");

        if (btnScore != null)
        {
            btnScore.clicked += LoadSceneB;
        }
        else
        {
            Debug.LogError("Botão btnScore não encontrado!");
        }

        if (btnPlay != null)
        {
            btnPlay.clicked += LoadSceneA;
        }
        else
        {
            Debug.LogError("Botão btnPlay não encontrado!");
        }
    }

    void LoadSceneA()
    {
        SceneManager.LoadScene("a");
    }

    void LoadSceneB()
    {
        SceneManager.LoadScene("ScoreScene");
    }
}
